import {Button, Dialog, Paper, TextField} from "@mui/material";
import {useEffect, useState} from "react";
import JSConfetti from "js-confetti"
import {useWriteTokenFactoryCreateToken} from "../generated.ts";
import {TOKEN_FACTORY_ADDRESS} from "../config.ts";

const jsConfetti = new JSConfetti()

const useCreateToken = () => {

    const [open, setOpen] = useState<boolean>(false);
    const { writeContract: createToken, isPending, isSuccess } = useWriteTokenFactoryCreateToken();

    useEffect(() => {
        if (!isSuccess) return;
        setOpen(false);
        jsConfetti.addConfetti({
            emojis: ['🍌'],
            emojiSize: 50,
            confettiNumber: 100,
        })
    }, [isSuccess]);

    const handleCreateToken = () => {
        createToken({
            address: TOKEN_FACTORY_ADDRESS,
            args: [
                "Test Token",
                "TT",
                1000000n,
            ],
        });
    }

    return { dialog: <Dialog open={open} onClose={() => setOpen(false)}>
            <Paper sx={{ width: "500px", display: 'flex', flexDirection: 'column', gap: 3, m: 1}}>
                <TextField label="Token Name" />
                <TextField label="Token Symbol" />
                <TextField label="Token Supply" />
                <TextField label="Token Decimals" />
                <TextField label="Token image url" />
                <Button loading={isPending} size={"large"} variant="contained" onClick={handleCreateToken}>
                    Create Token
                </Button>
            </Paper>
    </Dialog>, open: () => setOpen(true), close: () => setOpen(false) };
}

export default useCreateToken;