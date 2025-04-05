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

    const latestBlock = await publicClient.getBlockNumber();

    const logs = await publicClient.getContractEvents({
        address: TOKEN_FACTORY_ADDRESS,
        abi: TokenFactoryABI,
        eventName: "TokenCreated",
        fromBlock: 0n,
        toBlock: latestBlock,
    });

    //(address(token), msg.sender, _name, _symbol
    const tokens: Token[] = logs.map((e) => {
        return {
            address: e.args.tokenAddress as string,
            owner: e.args.creator as string,
            name: e.args.name as string,
            symbol: e.args.symbol as string,
            url: "https://gratisography.com/wp-content/uploads/2025/03/gratisography-cruising-cat-1036x780.jpg",
            description: "Coucou",
            supply: 100000,
            launchDate: 100000000,
        }
    }).filter(Boolean);

    console.log("Token Created: ", tokens);
    return tokens;
}

export default fetchToken;