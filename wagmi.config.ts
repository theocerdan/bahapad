import { defineConfig } from '@wagmi/cli'
import {TokenFactoryABI} from "./src/abi/TokenFactoryABI";
import { react } from '@wagmi/cli/plugins'
import {UniswapV2RouterABI} from "./src/abi/UniswapV2RouterABI";
import {UniswapV2Factory2ABI} from "./src/abi/UniswapV2Factory2ABI";

export default defineConfig({
  out: 'src/generated.ts',
  contracts: [
    {
      name: 'TokenFactory',
      abi: TokenFactoryABI,
    },
    {
      name: 'UniswapV2Router',
      abi: UniswapV2RouterABI,
    },
    {
      name: 'UniswapV2Factory',
      abi: UniswapV2Factory2ABI,
    }],
    plugins: [
        react(),
    ],
})
