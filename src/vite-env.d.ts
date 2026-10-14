/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly VITE_NETWORK?: "bahamut" | "local";
    readonly VITE_TOKEN_FACTORY_ADDRESS?: `0x${string}`;
}

interface ImportMeta {
    readonly env: ImportMetaEnv;
}
