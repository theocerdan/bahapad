import {defineChain} from "viem";

export const horizon = /*#__PURE__*/ defineChain({
    id: 2552,
    network: 'horizon',
    name: 'Horizon',
    nativeCurrency: { name: 'Fasttoken', symbol: 'FTN', decimals: 18 },
    rpcUrls: {
        default: {
            http: [
                'https://rpc1-horizon.bahamut.io',
            ],
            webSocket: [
                'wss://ws1.bahamut.io',
            ],
        },
    },
    blockExplorers: {
        default: {
            name: 'Ftnscan',
            url: 'https://horizon.ftnscan.com',
            apiUrl: 'https://www.horizon.ftnscan.com/api',
        },
    },
})
