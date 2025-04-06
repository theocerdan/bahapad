# PBW2025 - Bahamut

# BAHAPAD Frontend

## Overview

BAHAPAD is a decentralized application built for a hackathon. It enables users to create custom ERC-20 tokens and interact with them in a fun, engaging way. The frontend connects seamlessly with the smart contracts deployed on the Bahamut networks (mainnet & horizon).

## Technologies

- **React & TypeScript:** Provides a robust, type-safe UI.

- **Material UI (MUI):** Implements modern, responsive design and theming.

- **Wagmi & ConnectKit:** Facilitates blockchain interactions and wallet connectivity.

- **React Query:** Manages and updates token data in real time.

- **ESLint:** Ensures code quality and consistency.

## Key Features

- **Token Creation:**
A user-friendly form lets users deploy their own tokens.

- **Token Leaderboard:**
Displays a real-time list of tokens created through the TokenFactory smart contract.

- **Wallet Integration:**
Easy connect/disconnect functionality using ConnectKit, making blockchain interactions seamless.

- **Liquidity Pool Setup:**
Users can initialize liquidity pools for tokens directly from the interface.

## Testnet version

1. **Install Dependencies:**


```bash
npm install
```

2. **Run the Application:**
```bash
npm start
```

3. **Configure Environment Variables:**
Ensure your project is set up with any necessary API keys or configuration details.

## Deployed version

go to `https://bahapad.vercel.app/` to try it on the mainnet!