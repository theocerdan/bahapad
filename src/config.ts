import {createConfig, http} from "wagmi";
import { getDefaultConfig } from "connectkit";
import {getPublicClient} from "@wagmi/core";
import {bahamut, hardhat} from "viem/chains";

// "bahamut" (default) or "local" for a Hardhat node running on 127.0.0.1:8545
const NETWORK = import.meta.env.VITE_NETWORK === "local" ? "local" : "bahamut";

const chain = NETWORK === "local" ? hardhat : bahamut;

// The local default is the address of the first contract deployed by Hardhat's first account on a fresh node
const DEFAULT_TOKEN_FACTORY_ADDRESS = {
    bahamut: "0x159a456eeA939Bc80c0aC3861C4C4d800F31bB53",
    local: "0x5FbDB2315678afecb367f032d93F642f64180aa3",
} as const;

const TOKEN_FACTORY_ADDRESS: `0x${string}` = import.meta.env.VITE_TOKEN_FACTORY_ADDRESS ?? DEFAULT_TOKEN_FACTORY_ADDRESS[NETWORK];

const config = createConfig(
    getDefaultConfig({
        // Your dApps chains
        chains: [chain],
        transports: {
            // RPC URL for each chain
            [chain.id]: http(),
        },

        // Required API Keys
        walletConnectProjectId: "e560f2857a209eefe26d5ce7ffb1a039",

        // Required App Info
        appName: "Your App Name",

        // Optional App Info
        appDescription: "Your App Description",
        appUrl: "https://family.co", // your app's url
        appIcon: "https://family.co/logo.png", // your app's icon, no bigger than 1024x1024px (max. 1MB)
    }),
);

export const publicClient = getPublicClient(config);

export { config, TOKEN_FACTORY_ADDRESS };
