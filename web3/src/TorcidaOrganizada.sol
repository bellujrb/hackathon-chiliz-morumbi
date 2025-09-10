// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "./SPFCToken.sol";

/**
 * @title TorcidaOrganizada
 * @dev Contrato básico para gerenciar torcidas organizadas do SPFC
 * @author Fanify Team
 */
contract TorcidaOrganizada {
    // ============ STATE VARIABLES ============
    
    address public immutable owner;
    SPFCToken public immutable spfcToken;
    
    // Estrutura de uma Torcida
    struct Torcida {
        uint256 id;
        string name;
        string description;
        address leader;
        uint256 totalStaked;
        uint256 memberCount;
        bool active;
        uint256 createdAt;
    }
    
    // Estrutura de Votação
    struct Votacao {
        uint256 id;
        uint256 torcidaId;
        string title;
        string description;
        uint256 startTime;
        uint256 endTime;
        bool active;
        uint256 totalVotes;
        mapping(uint256 => uint256) optionVotes; // optionId => voteCount
        mapping(address => bool) hasVoted;
        address creator;
    }
    
    // Estrutura de Evento
    struct Evento {
        uint256 id;
        uint256 torcidaId;
        string name;
        string description;
        uint256 eventDate;
        string location;
        uint256 maxParticipants;
        uint256 currentParticipants;
        uint256 pricePerPerson; // em SPFC tokens
        bool active;
        address organizer;
        mapping(address => bool) participants;
    }
    
    // ============ MAPPINGS ============
    
    mapping(uint256 => Torcida) public torcidas;
    mapping(address => uint256) public userTorcida; // user => torcidaId
    mapping(address => bool) public isTorcidaLeader;
    
    mapping(uint256 => Votacao) public votacoes;
    mapping(uint256 => Evento) public eventos;
    
    uint256 public nextTorcidaId = 1;
    uint256 public nextVotacaoId = 1;
    uint256 public nextEventoId = 1;
    
    // ============ EVENTS ============
    
    event TorcidaCriada(uint256 indexed torcidaId, string name, address indexed leader);
    event UsuarioEntrouTorcida(uint256 indexed torcidaId, address indexed user, uint256 stakeAmount);
    event UsuarioSaiuTorcida(uint256 indexed torcidaId, address indexed user);
    event VotacaoCriada(uint256 indexed votacaoId, uint256 indexed torcidaId, string title);
    event VotoEmitido(uint256 indexed votacaoId, address indexed voter, uint256 optionId);
    event EventoCriado(uint256 indexed eventoId, uint256 indexed torcidaId, string name);
    event UsuarioInscritoEvento(uint256 indexed eventoId, address indexed user);
    
    // ============ MODIFIERS ============
    
    modifier onlyOwner() {
        require(msg.sender == owner, "TorcidaOrganizada: Only owner");
        _;
    }
    
    modifier onlyTorcidaLeader(uint256 torcidaId) {
        require(torcidas[torcidaId].leader == msg.sender, "TorcidaOrganizada: Only torcida leader");
        _;
    }
    
    modifier onlyTorcidaMember(uint256 torcidaId) {
        require(userTorcida[msg.sender] == torcidaId, "TorcidaOrganizada: Only torcida member");
        _;
    }
    
    modifier torcidaExists(uint256 torcidaId) {
        require(torcidas[torcidaId].id != 0, "TorcidaOrganizada: Torcida does not exist");
        _;
    }
    
    // ============ CONSTRUCTOR ============
    
    constructor(address _spfcToken) {
        owner = msg.sender;
        spfcToken = SPFCToken(_spfcToken);
    }
    
    // ============ TORCIDA FUNCTIONS ============
    
    function criarTorcida(
        string memory _name,
        string memory _description
    ) external {
        require(bytes(_name).length > 0, "TorcidaOrganizada: Name required");
        require(userTorcida[msg.sender] == 0, "TorcidaOrganizada: User already in a torcida");
        
        uint256 torcidaId = nextTorcidaId++;
        
        torcidas[torcidaId] = Torcida({
            id: torcidaId,
            name: _name,
            description: _description,
            leader: msg.sender,
            totalStaked: 0,
            memberCount: 0,
            active: true,
            createdAt: block.timestamp
        });
        
        userTorcida[msg.sender] = torcidaId;
        isTorcidaLeader[msg.sender] = true;
        
        emit TorcidaCriada(torcidaId, _name, msg.sender);
    }
    
    function entrarTorcida(uint256 torcidaId, uint256 stakeAmount) external torcidaExists(torcidaId) {
        require(torcidas[torcidaId].active, "TorcidaOrganizada: Torcida inactive");
        require(userTorcida[msg.sender] == 0, "TorcidaOrganizada: User already in a torcida");
        require(stakeAmount >= 1000 * 1e18, "TorcidaOrganizada: Minimum stake required");
        require(spfcToken.balanceOf(msg.sender) >= stakeAmount, "TorcidaOrganizada: Insufficient SPFC balance");
        
        // Transfer SPFC tokens to contract
        spfcToken.transferFrom(msg.sender, address(this), stakeAmount);
        
        // Update torcida info
        torcidas[torcidaId].totalStaked += stakeAmount;
        torcidas[torcidaId].memberCount++;
        
        // Update user info
        userTorcida[msg.sender] = torcidaId;
        
        emit UsuarioEntrouTorcida(torcidaId, msg.sender, stakeAmount);
    }
    
    function sairTorcida() external {
        uint256 torcidaId = userTorcida[msg.sender];
        require(torcidaId != 0, "TorcidaOrganizada: User not in any torcida");
        require(torcidas[torcidaId].leader != msg.sender, "TorcidaOrganizada: Leader cannot leave");
        
        // Get user's staked amount (simplified - in real implementation, track individual stakes)
        uint256 userStake = spfcToken.balanceOf(address(this));
        
        // Update torcida info
        torcidas[torcidaId].totalStaked -= userStake;
        torcidas[torcidaId].memberCount--;
        
        // Update user info
        userTorcida[msg.sender] = 0;
        
        // Return staked tokens
        spfcToken.transfer(msg.sender, userStake);
        
        emit UsuarioSaiuTorcida(torcidaId, msg.sender);
    }
    
    // ============ VOTACAO FUNCTIONS ============
    
    function criarVotacao(
        uint256 torcidaId,
        string memory _title,
        string memory _description,
        uint256 _duration
    ) external onlyTorcidaLeader(torcidaId) torcidaExists(torcidaId) {
        require(_duration > 0, "TorcidaOrganizada: Invalid duration");
        
        uint256 votacaoId = nextVotacaoId++;
        
        votacoes[votacaoId].id = votacaoId;
        votacoes[votacaoId].torcidaId = torcidaId;
        votacoes[votacaoId].title = _title;
        votacoes[votacaoId].description = _description;
        votacoes[votacaoId].startTime = block.timestamp;
        votacoes[votacaoId].endTime = block.timestamp + _duration;
        votacoes[votacaoId].active = true;
        votacoes[votacaoId].totalVotes = 0;
        votacoes[votacaoId].creator = msg.sender;
        
        emit VotacaoCriada(votacaoId, torcidaId, _title);
    }
    
    function votar(uint256 votacaoId, uint256 optionId) external {
        Votacao storage votacao = votacoes[votacaoId];
        require(votacao.id != 0, "TorcidaOrganizada: Votacao does not exist");
        require(votacao.active, "TorcidaOrganizada: Votacao inactive");
        require(block.timestamp <= votacao.endTime, "TorcidaOrganizada: Votacao ended");
        require(!votacao.hasVoted[msg.sender], "TorcidaOrganizada: Already voted");
        require(userTorcida[msg.sender] == votacao.torcidaId, "TorcidaOrganizada: Not a member");
        
        votacao.hasVoted[msg.sender] = true;
        votacao.optionVotes[optionId]++;
        votacao.totalVotes++;
        
        emit VotoEmitido(votacaoId, msg.sender, optionId);
    }
    
    function getVotacaoResult(uint256 votacaoId) external view returns (
        uint256 totalVotes,
        uint256[] memory optionVotes
    ) {
        Votacao storage votacao = votacoes[votacaoId];
        require(votacao.id != 0, "TorcidaOrganizada: Votacao does not exist");
        
        totalVotes = votacao.totalVotes;
        
        // Return votes for options 0-9 (assuming max 10 options)
        optionVotes = new uint256[](10);
        for (uint256 i = 0; i < 10; i++) {
            optionVotes[i] = votacao.optionVotes[i];
        }
    }
    
    // ============ EVENTO FUNCTIONS ============
    
    function criarEvento(
        uint256 torcidaId,
        string memory _name,
        string memory _description,
        uint256 _eventDate,
        string memory _location,
        uint256 _maxParticipants,
        uint256 _pricePerPerson
    ) external onlyTorcidaLeader(torcidaId) torcidaExists(torcidaId) {
        require(_eventDate > block.timestamp, "TorcidaOrganizada: Event date must be in future");
        require(_maxParticipants > 0, "TorcidaOrganizada: Invalid max participants");
        
        uint256 eventoId = nextEventoId++;
        
        eventos[eventoId].id = eventoId;
        eventos[eventoId].torcidaId = torcidaId;
        eventos[eventoId].name = _name;
        eventos[eventoId].description = _description;
        eventos[eventoId].eventDate = _eventDate;
        eventos[eventoId].location = _location;
        eventos[eventoId].maxParticipants = _maxParticipants;
        eventos[eventoId].currentParticipants = 0;
        eventos[eventoId].pricePerPerson = _pricePerPerson;
        eventos[eventoId].active = true;
        eventos[eventoId].organizer = msg.sender;
        
        emit EventoCriado(eventoId, torcidaId, _name);
    }
    
    function inscreverEvento(uint256 eventoId) external {
        Evento storage evento = eventos[eventoId];
        require(evento.id != 0, "TorcidaOrganizada: Evento does not exist");
        require(evento.active, "TorcidaOrganizada: Evento inactive");
        require(!evento.participants[msg.sender], "TorcidaOrganizada: Already registered");
        require(evento.currentParticipants < evento.maxParticipants, "TorcidaOrganizada: Evento full");
        require(userTorcida[msg.sender] == evento.torcidaId, "TorcidaOrganizada: Not a member");
        
        // Transfer payment
        if (evento.pricePerPerson > 0) {
            spfcToken.transferFrom(msg.sender, address(this), evento.pricePerPerson);
        }
        
        evento.participants[msg.sender] = true;
        evento.currentParticipants++;
        
        emit UsuarioInscritoEvento(eventoId, msg.sender);
    }
    
    
    // ============ VIEW FUNCTIONS ============
    
    function getTorcida(uint256 torcidaId) external view returns (
        uint256 id,
        string memory name,
        string memory description,
        address leader,
        uint256 totalStaked,
        uint256 memberCount,
        bool active,
        uint256 createdAt
    ) {
        Torcida storage t = torcidas[torcidaId];
        return (
            t.id,
            t.name,
            t.description,
            t.leader,
            t.totalStaked,
            t.memberCount,
            t.active,
            t.createdAt
        );
    }
    
    function getEvento(uint256 eventoId) external view returns (
        uint256 id,
        uint256 torcidaId,
        string memory name,
        string memory description,
        uint256 eventDate,
        string memory location,
        uint256 maxParticipants,
        uint256 currentParticipants,
        uint256 pricePerPerson,
        bool active,
        address organizer
    ) {
        Evento storage e = eventos[eventoId];
        return (
            e.id,
            e.torcidaId,
            e.name,
            e.description,
            e.eventDate,
            e.location,
            e.maxParticipants,
            e.currentParticipants,
            e.pricePerPerson,
            e.active,
            e.organizer
        );
    }
    
    function isParticipantEvento(uint256 eventoId, address user) external view returns (bool) {
        return eventos[eventoId].participants[user];
    }
    
}
