# SPFC Fanify: Sistema de Torcidas Organizadas com Blockchain

> _TEAM SPFC Fanify: https://hackathon-chiliz-morumbi.vercel.app/

![Build Status](https://img.shields.io/badge/Build-Passing-brightgreen)
![Platform](https://img.shields.io/badge/Platform-Web-blue)
![Blockchain](https://img.shields.io/badge/Blockchain-Chiliz-red)
![Team](https://img.shields.io/badge/Team-SPFC%20Tricolor-red)

---

### 🌐 Introdução

O SPFC Fanify é uma plataforma blockchain revolucionária desenvolvida especificamente para as torcidas organizadas do São Paulo Futebol Clube. O sistema permite que torcedores façam stake de tokens $SPFC em torcidas organizadas, participem de votações, organizem eventos e exerçam governança através de contratos inteligentes na Chiliz Chain.

**🎯 Missão**: Conectar a paixão tricolor com a tecnologia blockchain, criando um ecossistema digital onde torcedores podem se engajar de forma mais profunda e organizada com o clube e entre si.

---

### 🔴 Chiliz Chain

Nossa plataforma é construída na Chiliz Chain, uma blockchain especializada em esportes e entretenimento, oferecendo transações rápidas e alta escalabilidade. Ao escolher a Chiliz, alinhamos nossa missão com uma rede já abraçada por grandes clubes e milhões de fãs—tornando-a o lar perfeito para o SPFC Fanify.

Aproveitando o ecossistema centrado em fãs da Chiliz, garantimos que cada momento de engajamento tricolor seja não apenas seguro e transparente, mas também profundamente conectado à comunidade esportiva global.

---

### 🏛️ Funcionalidades Principais

#### 🪙 Token $SPFC
- **Nome**: São Paulo FC Token
- **Símbolo**: SPFC  
- **Decimais**: 18

#### 🏟️ Torcidas Organizadas
- **Criação**: Qualquer usuário pode criar uma torcida
- **Liderança**: Criador se torna líder da torcida
- **Membros**: Usuários podem entrar fazendo stake mínimo de 1000 SPFC
- **Informações**: Nome, descrição, imagem, redes sociais

#### 🗳️ Sistema de Votações
- **Criação**: Apenas líderes de torcidas podem criar votações
- **Participação**: Apenas membros da torcida podem votar
- **Opções**: Até 10 opções de voto por votação
- **Duração**: Tempo configurável para cada votação

#### 🎉 Eventos e Caravanas
- **Criação**: Líderes podem criar eventos (caravanas, festas, etc.)
- **Inscrições**: Membros podem se inscrever nos eventos
- **Pagamento**: Eventos podem ter preço em tokens SPFC
- **Limite**: Controle de número máximo de participantes

#### 🏛️ Governança
- **Propostas**: Líderes podem criar propostas de governança
- **Votação**: Membros votam a favor ou contra
- **Execução**: Propostas aprovadas podem ser executadas

---

### 🔗 Smart Contracts na Chiliz Testnet

📄 **Contratos Deployados:**  

- 🪙 [SPFCToken](https://testnet.chiliscan.com/address/)
- 🏟️ [TorcidaOrganizada](https://testnet.chiliscan.com/address/)

⚠️ **Status do Deploy**: Os contratos foram enviados para a rede, mas devido a problemas de timing e congestionamento da rede, algumas transações ainda estão pendentes de confirmação. O sistema está funcionalmente completo, mas aguardando confirmação final das transações na blockchain.

✅ Em desenvolvimento ativo · Live na **Chiliz Chain (Spicy Testnet)**  
🔐 Sistema completo de governança e engajamento para torcidas organizadas do SPFC.

---

## 🛠 Instalação e Configuração

### Front-end

1. **Pré-requisitos**
    - NodeJS instalado na sua máquina
    - Carteira Web3 (MetaMask, WalletConnect, etc.)

2. **Clone o Repositório**

    ```bash
    git clone https://github.com/bellujrb/hackathon-chiliz-morumbi.git
    cd front-end
    ```

3. **Instalar Dependências**

    ```bash
    npm install
    # ou
    pnpm install
    ```

4. **Executar a Aplicação**

    ```bash
    npm run dev
    # ou
    pnpm dev
    ```

### Smart Contracts (Web3)

1. **Pré-requisitos**
    - Foundry instalado
    - Chaves privadas configuradas

2. **Deploy dos Contratos**

    ```bash
    cd web3
    ./deploy-spfc.sh
    ```

⚠️ **Nota sobre Deploy**: Durante o desenvolvimento, enfrentamos problemas de timing no deploy dos contratos na Chiliz Chain. As transações foram enviadas mas algumas ainda estão pendentes de confirmação devido ao congestionamento da rede. O sistema está funcionalmente completo e pronto para uso assim que as transações forem confirmadas.


#### `hackathon-chiliz-morumbi`
- `front-end`
    - Frontend Application
- `web3`
    - Blockchain Application
- `README.md`
    - Documentation Project


---

## 🙏 Acknowledgments

Special thanks to Chiliz for this ambitious opportunity.
