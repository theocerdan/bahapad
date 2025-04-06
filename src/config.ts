import {createConfig, http} from "wagmi";
import { getDefaultConfig } from "connectkit";
import {getPublicClient} from "@wagmi/core";
import {bahamut} from "viem/chains";

const TOKEN_FACTORY_ADDRESS = "0x159a456eeA939Bc80c0aC3861C4C4d800F31bB53";

const config = createConfig(
    getDefaultConfig({
        // Your dApps chains
        chains: [bahamut],
        transports: {
            // RPC URL for each chain
            //[bahamut.id]: http(),
            [bahamut.id]: http(),
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