# Sistema SPFC - Torcidas Organizadas

## Visão Geral

O Sistema SPFC é uma plataforma blockchain completa para torcidas organizadas do São Paulo Futebol Clube, construída com Solidity e Foundry. O sistema permite que torcedores façam stake de tokens $SPFC em torcidas organizadas, participem de votações, organizem eventos e exerçam governança.

## Arquitetura do Sistema

### Contratos Principais

1. **SPFCToken.sol** - Token ERC20 nativo do sistema
2. **TorcidaOrganizada.sol** - Contrato principal para gerenciar torcidas
3. **SPFCDeployer.sol** - Contrato para deploy e configuração inicial
4. **SPFCInterface.sol** - Interface simplificada para integração

## Funcionalidades

### 🪙 Token $SPFC
- **Nome**: São Paulo FC Token
- **Símbolo**: SPFC
- **Decimais**: 18
- **Supply Inicial**: 1 bilhão de tokens
- **Supply Máximo**: 10 bilhões de tokens
- **Staking**: Usuários podem fazer stake de tokens em torcidas
- **Recompensas**: Sistema de recompensas por staking (0.001 SPFC por segundo por token staked)

### 🏟️ Torcidas Organizadas
- **Criação**: Qualquer usuário pode criar uma torcida
- **Liderança**: Criador se torna líder da torcida
- **Membros**: Usuários podem entrar fazendo stake mínimo de 1000 SPFC
- **Informações**: Nome, descrição, imagem, redes sociais

### 🗳️ Sistema de Votações
- **Criação**: Apenas líderes de torcidas podem criar votações
- **Participação**: Apenas membros da torcida podem votar
- **Opções**: Até 10 opções de voto por votação
- **Duração**: Tempo configurável para cada votação

### 🎉 Eventos e Caravanas
- **Criação**: Líderes podem criar eventos (caravanas, festas, etc.)
- **Inscrições**: Membros podem se inscrever nos eventos
- **Pagamento**: Eventos podem ter preço em tokens SPFC
- **Limite**: Controle de número máximo de participantes

### 🏛️ Governança
- **Propostas**: Líderes podem criar propostas de governança
- **Votação**: Membros votam a favor ou contra
- **Execução**: Propostas aprovadas podem ser executadas

## Como Usar

### 1. Deploy do Sistema

```bash
# Configurar variáveis de ambiente
export PRIVATE_KEY=your_private_key
export RPC_URL=your_rpc_url
export ETHERSCAN_API_KEY=your_etherscan_key

# Executar deploy
./deploy-spfc.sh
```

### 2. Interação Básica

```solidity
// Criar uma torcida
spfcInterface.criarTorcida(
    "Torcida Independente",
    "A maior torcida do SPFC",
    "https://example.com/image.jpg",
    "@torcidaindependente"
);

// Entrar em uma torcida
spfcInterface.entrarTorcida(1, 10000 * 1e18); // 10k SPFC

// Fazer stake
spfcInterface.stake(5000 * 1e18); // 5k SPFC

// Criar votação
spfcInterface.criarVotacao(
    1, // torcidaId
    "Qual cor do uniforme?",
    "Vote na cor do uniforme para o próximo jogo",
    7 days // duração
);

// Votar
spfcInterface.votar(1, 0); // votacaoId, optionId

// Criar evento
spfcInterface.criarEvento(
    1, // torcidaId
    "Caravana para o Morumbi",
    "Caravana para o jogo contra o Palmeiras",
    block.timestamp + 30 days, // data
    "Estádio do Morumbi",
    100, // max participantes
    100 * 1e18 // preço em SPFC
);
```

## Estrutura de Arquivos

```
web3/src/
├── SPFCToken.sol          # Token ERC20 principal
├── TorcidaOrganizada.sol  # Contrato principal das torcidas
├── SPFCDeployer.sol       # Deploy e configuração
├── SPFCInterface.sol      # Interface simplificada
└── funify/                # Contratos antigos (manter para compatibilidade)
```

## Segurança

- **Reentrancy Protection**: Proteção contra ataques de reentrância
- **Access Control**: Controles de acesso baseados em roles
- **Input Validation**: Validação rigorosa de entradas
- **Safe Math**: Uso de bibliotecas seguras para operações matemáticas

## Eventos

O sistema emite eventos para todas as ações importantes:

- `TorcidaCriada`: Nova torcida criada
- `UsuarioEntrouTorcida`: Usuário entrou em uma torcida
- `VotacaoCriada`: Nova votação criada
- `VotoEmitido`: Voto registrado
- `EventoCriado`: Novo evento criado
- `UsuarioInscritoEvento`: Usuário se inscreveu em evento

## Integração Frontend

O contrato `SPFCInterface` fornece uma interface simplificada para integração com o frontend:

```typescript
// Exemplo de integração com ethers.js
const spfcInterface = new ethers.Contract(interfaceAddress, abi, signer);

// Obter informações do usuário
const userInfo = await spfcInterface.getUserInfo(userAddress);

// Obter informações da torcida
const torcidaInfo = await spfcInterface.getTorcidaInfo(torcidaId);
```

## Roadmap

- [ ] Sistema de NFTs para torcidas
- [ ] Integração com oráculos para dados de jogos
- [ ] Sistema de recompensas mais complexo
- [ ] Integração com redes sociais
- [ ] Mobile app nativo

## Contribuição

Para contribuir com o projeto:

1. Fork o repositório
2. Crie uma branch para sua feature
3. Faça commit das mudanças
4. Abra um Pull Request

## Licença

MIT License - veja o arquivo LICENSE para detalhes.
