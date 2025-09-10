// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "solady/tokens/ERC20.sol";

/**
 * @title SPFCToken
 * @dev Token ERC20 básico para torcidas organizadas do São Paulo Futebol Clube
 * @author Fanify Team
 */
contract SPFCToken is ERC20 {
    address public immutable owner;
    
    // Configurações do token
    uint256 public constant INITIAL_SUPPLY = 1_000_000_000 * 1e18; // 1 bilhão de tokens
    uint256 public constant MAX_SUPPLY = 10_000_000_000 * 1e18; // 10 bilhões máximo
    
    // ============ EVENTS ============
    
    event TokensMinted(address indexed to, uint256 amount);
    
    // ============ MODIFIERS ============
    
    modifier onlyOwner() {
        require(msg.sender == owner, "SPFCToken: Only owner");
        _;
    }
    
    // ============ CONSTRUCTOR ============
    
    constructor() {
        owner = msg.sender;
        _mint(msg.sender, INITIAL_SUPPLY);
    }
    
    // ============ VIEW FUNCTIONS ============
    
    function name() public pure override returns (string memory) {
        return "Sao Paulo FC Token";
    }
    
    function symbol() public pure override returns (string memory) {
        return "SPFC";
    }
    
    function decimals() public pure override returns (uint8) {
        return 18;
    }
    
    // ============ ADMIN FUNCTIONS ============
    
    function mint(address to, uint256 amount) external onlyOwner {
        require(totalSupply() + amount <= MAX_SUPPLY, "SPFCToken: Max supply exceeded");
        require(to != address(0), "SPFCToken: Mint to zero address");
        
        _mint(to, amount);
        emit TokensMinted(to, amount);
    }
}
