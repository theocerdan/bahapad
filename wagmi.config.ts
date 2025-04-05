import { defineConfig } from '@wagmi/cli'
import {TokenFactoryABI} from "./src/abi/TokenFactoryABI";
import { react } from '@wagmi/cli/plugins'

export default defineConfig({
  out: 'src/generated.ts',
  contracts: [
    {
      name: 'TokenFactory',
      abi: TokenFactoryABI,
    }],
    plugins: [
        react(),
    ],
})
