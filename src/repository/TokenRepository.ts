import {publicClient, TOKEN_FACTORY_ADDRESS} from "../config.ts";
import {TokenFactoryABI} from "../abi/TokenFactoryABI.ts";

export type Token = {
    address: string,
    name: string,
    owner: string,
    symbol: string,
    url: string,
    description: string,
    supply: number
    launchDate: number
}

const fetchToken = async () => {

    // @ts-expect-error
    const latestBlock = await publicClient.getBlockNumber();

    // @ts-expect-error
    const logs = await publicClient.getContractEvents({
        address: TOKEN_FACTORY_ADDRESS,
        abi: TokenFactoryABI,
        eventName: "TokenCreated",
        fromBlock: latestBlock - 100n,
        toBlock: latestBlock,
    });

    //(address(token), msg.sender, _name, _symbol
    const tokens: Token[] = logs.map((e) => {
        return {
            address: e.args.tokenAddress as string,
            owner: e.args.creator as string,
            name: e.args.name as string,
            symbol: e.args.symbol as string,
            url: e.args.image as string,
            description: e.args.description as string,
            supply: Number(e.args.totalSupply),
            launchDate: Number(e.args.timestamp),
        }
    }).filter(Boolean);

    // Sort by launch date
    tokens.sort((a, b) => b.launchDate - a.launchDate);
    console.log("Token Created: ", tokens);
    return tokens;
}

export default fetchToken;