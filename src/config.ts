import { createConfig, http } from "wagmi";
import { getDefaultConfig } from "connectkit";
import {getPublicClient} from "@wagmi/core";
import {horizon} from "../horizon.ts";

const TOKEN_FACTORY_ADDRESS = "0x689A26ff104ad370f923f21fa7f0356B6E787FA8";

const config = createConfig(
    getDefaultConfig({
        // Your dApps chains
        chains: [horizon],
        transports: {
            // RPC URL for each chain
            //[bahamut.id]: http(),
            [horizon.id]: http(),
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