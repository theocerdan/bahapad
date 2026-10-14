# PBW2025 - Bahamut

# BAHAPAD Frontend

🥉 3rd place of the Bahamut track at the Paris Blockchain Week 2025 hackathon.

📜 Smart contracts: [Bahapad-Smart-Contract-PBW2025](https://github.com/LezardSC/Bahapad-Smart-Contract-PBW2025)

> [!WARNING]
> **The Bahamut chain is no longer reachable.** As of October 2026, its public RPC endpoints and the ftnscan explorer don't respond anymore, so the deployed version at `https://bahapad.vercel.app/` can't load any token nor send transactions. The app still runs against a local Hardhat chain, see [Run it locally](#run-it-locally).

![Bahapad demo: connecting a wallet, creating a token and initializing its liquidity pool](demo/bahapad-demo.gif)

## Overview

BAHAPAD is a decentralized application built for a hackathon. It enables users to create custom ERC-20 tokens and interact with them in a fun, engaging way. The frontend connects seamlessly with the smart contracts deployed on the Bahamut networks (mainnet & horizon), which live in their own repository: [Bahapad-Smart-Contract-PBW2025](https://github.com/LezardSC/Bahapad-Smart-Contract-PBW2025).

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

## Run it locally

1. **Start a local chain with the contracts:**
In the [smart contract repository](https://github.com/LezardSC/Bahapad-Smart-Contract-PBW2025), run `npm run node`, then `npm run deploy:local` and `npm run seed` in another terminal.

2. **Install Dependencies:**

```bash
npm install
```

3. **Configure Environment Variables:**
Copy `.env.example` to `.env`, it selects the local network:

```bash
cp .env.example .env
```

| Variable | Description |
| --- | --- |
| `VITE_NETWORK` | `bahamut` (default) or `local` for a Hardhat node on `127.0.0.1:8545` |
| `VITE_TOKEN_FACTORY_ADDRESS` | Optional, defaults to the TokenFactory address of the selected network |

4. **Run the Application:**
```bash
npm run dev
```

5. **Connect a wallet:**
Add the Hardhat network (RPC `http://127.0.0.1:8545`, chain ID `31337`) to MetaMask and import one of the test accounts printed by `npm run node`.

The demo tokens use the mascots in `public/mascots`, an image URL like `/mascots/ribbit-royale.svg` works when creating a token too.

## Deployed version

The mainnet version used to be deployed at `https://bahapad.vercel.app/`, it stopped working with the Bahamut chain.
