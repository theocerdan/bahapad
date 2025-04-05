import MemeProject from "../components/MemeCard.tsx";
import {Box} from "@mui/material";
import {useQuery} from "@tanstack/react-query";
import fetchToken from "../repository/TokenRepository.ts";

const Leaderboard = () => {

    const { data } = useQuery({ queryKey: ["token"], queryFn: fetchToken });

    return (
        <Box sx={{ display: 'flex', width: '100%', flexDirection: 'column', gap: 3, justifyContent: 'center'}}>
            {data != undefined && data.map((token) => (
                <MemeProject key={token.address} token={token} />
            ))}
        </Box>
    );
}

export default Leaderboard;