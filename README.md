# SPFC Fanify: Organized Fan Groups System with Blockchain

> **🚀 LIVE DEMO**: [https://hackathon-chiliz-morumbi.vercel.app/](https://hackathon-chiliz-morumbi.vercel.app/)  
> **📋 WORKING CONTRACTS**: [https://hackathon-chiliz-morumbi.vercel.app/contracts](https://hackathon-chiliz-morumbi.vercel.app/contracts)  
> _Note: The main app is still under development due to time constraints, but the contracts are fully functional!_

![Build Status](https://img.shields.io/badge/Build-Passing-brightgreen)
![Platform](https://img.shields.io/badge/Platform-Web-blue)
![Blockchain](https://img.shields.io/badge/Blockchain-Chiliz-red)
![Team](https://img.shields.io/badge/Team-SPFC%20Tricolor-red)
![Status](https://img.shields.io/badge/Status-Contracts%20Live-green)

---

### 🌐 Introduction

SPFC Fanify is a revolutionary blockchain platform developed specifically for São Paulo Futebol Clube's organized fan groups. The system allows fans to stake $SPFC tokens in organized fan groups, participate in voting, organize events, and exercise governance through smart contracts on the Chiliz Chain.

**🎯 Mission**: Connect the tricolor passion with blockchain technology, creating a digital ecosystem where fans can engage more deeply and organized with the club and each other.

---

### 🔴 Chiliz Chain

Our platform is built on Chiliz Chain, a blockchain specialized in sports and entertainment, offering fast transactions and high scalability. By choosing Chiliz, we align our mission with a network already embraced by major clubs and millions of fans—making it the perfect home for SPFC Fanify.

Leveraging Chiliz's fan-centric ecosystem, we ensure that every tricolor engagement moment is not only secure and transparent, but also deeply connected to the global sports community.

---

### 🏛️ Main Features

#### 🪙 $SPFC Token
- **Name**: São Paulo FC Token
- **Symbol**: SPFC  
- **Decimals**: 18

#### 🏟️ Organized Fan Groups
- **Creation**: Any user can create a fan group
- **Leadership**: Creator becomes the fan group leader
- **Members**: Users can join by staking a minimum of 1000 SPFC
- **Information**: Name, description, image, social networks

#### 🗳️ Voting System
- **Creation**: Only fan group leaders can create votes
- **Participation**: Only fan group members can vote
- **Options**: Up to 10 voting options per vote
- **Duration**: Configurable time for each vote

#### 🎉 Events and Caravans
- **Creation**: Leaders can create events (caravans, parties, etc.)
- **Registration**: Members can register for events
- **Payment**: Events can have a price in SPFC tokens
- **Limit**: Control of maximum number of participants

#### 🏛️ Governance
- **Proposals**: Leaders can create governance proposals
- **Voting**: Members vote for or against
- **Execution**: Approved proposals can be executed

---

### 🔗 Smart Contracts on Chiliz Testnet

📄 **Deployed Contracts:**  

- 🪙 [SPFCToken](https://testnet.chiliscan.com/address/0x1f7178b26a7bb14d4d15866d910fd0d1870acd78): `0x1f7178b26a7bb14d4d15866d910fd0d1870acd78`
- 🏟️ [TorcidaOrganizada](https://testnet.chiliscan.com/address/0xf9b689498a3ea34a2c9f9fda7a664a9e3017742a): `0xf9b689498a3ea34a2c9f9fda7a664a9e3017742a`

✅ **Deploy Status**: Contracts successfully deployed and confirmed on Chiliz Chain (Spicy Testnet)  
🔐 Complete governance and engagement system for SPFC organized fan groups.

**🌐 Try the Working Contracts**: [https://hackathon-chiliz-morumbi.vercel.app/contracts](https://hackathon-chiliz-morumbi.vercel.app/contracts)

---

## 🛠 Installation and Setup

### Front-end

1. **Prerequisites**
    - NodeJS installed on your machine
    - Web3 Wallet (MetaMask, WalletConnect, etc.)

2. **Clone the Repository**

    ```bash
    git clone https://github.com/bellujrb/hackathon-chiliz-morumbi.git
    cd front-end
    ```

3. **Install Dependencies**

    ```bash
    npm install
    # or
    pnpm install
    ```

4. **Run the Application**

    ```bash
    npm run dev
    # or
    pnpm dev
    ```

### Smart Contracts (Web3)

1. **Prerequisites**
    - Foundry installed
    - Private keys configured

2. **Deploy Contracts**

    ```bash
    cd web3
    ./deploy-spfc.sh
    ```

### Project Structure

```
hackathon-chiliz-morumbi/
├── front-end/          # Frontend Application (Next.js)
├── web3/              # Smart Contracts (Foundry)
└── README.md          # Project Documentation
```

---

## 🚀 Quick Start

1. **Visit the Live Demo**: [https://hackathon-chiliz-morumbi.vercel.app/](https://hackathon-chiliz-morumbi.vercel.app/)
2. **Test the Contracts**: [https://hackathon-chiliz-morumbi.vercel.app/contracts](https://hackathon-chiliz-morumbi.vercel.app/contracts)
3. **Connect your wallet** to Chiliz Testnet (Chain ID: 88882)
4. **Start interacting** with the SPFC Token and Torcida Organizada contracts!

---

## 🙏 Acknowledgments

Special thanks to Chiliz for this ambitious opportunity and for providing the perfect blockchain infrastructure for sports fan engagement.
