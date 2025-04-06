import {Button, Dialog, DialogContent, DialogContentText, DialogTitle, Stack} from "@mui/material";
import {useEffect, useState} from "react";
import JSConfetti from "js-confetti"
import {useWriteTokenFactoryCreateToken} from "../generated.ts";
import {TOKEN_FACTORY_ADDRESS} from "../config.ts";
import {SubmitHandler, useForm} from "react-hook-form";
import {TextareaAutosizeElement, TextFieldElement} from "react-hook-form-mui";

const jsConfetti = new JSConfetti()

type TokenCreationInput = {
    name: string;
    symbol: string;
    image: string;
    totalSupply: number;
    description: string;
}
const useCreateToken = () => {

    const {control, handleSubmit} = useForm<TokenCreationInput>({
        defaultValues: {
            name: '',
            symbol: '',
            image: '',
            totalSupply: 0,
            description: '',
        },
    })
    const [open, setOpen] = useState<boolean>(false);
    const { writeContract: createToken, isPending, isSuccess } = useWriteTokenFactoryCreateToken();

    useEffect(() => {
        if (!isSuccess) return;
        setOpen(false);
        jsConfetti.addConfetti({
            emojis: ['🐸'],
            emojiSize: 350,
            confettiNumber: 30,
        })
    }, [isSuccess]);

    const onSubmit: SubmitHandler<TokenCreationInput> = (data) => {
        createToken({
            address: TOKEN_FACTORY_ADDRESS,
            args: [
                data.name,
                data.symbol,
                BigInt(data.totalSupply),
                data.image,
                data.description
            ],
        });
    }


    return { dialog: <Dialog fullWidth={true} open={open} onClose={() => setOpen(false)}>
            <DialogTitle>Let's create your dream token</DialogTitle>
            <DialogContent>
                <DialogContentText>
                    <form onSubmit={handleSubmit(onSubmit)} noValidate>
                        <Stack spacing={2}>
                            <TextFieldElement
                                name={'name'}
                                label={'Name'}
                                control={control}
                                required
                                fullWidth
                            />
                            <TextFieldElement
                                name={'symbol'}
                                label={'Symbol'}
                                control={control}
                                required
                                fullWidth
                            />
                            <TextFieldElement
                                name={'image'}
                                label={'Image URL'}
                                control={control}
                                required
                                fullWidth
                            />
                            <TextFieldElement
                                name={'totalSupply'}
                                label={'Total Supply'}
                                control={control}
                                required
                                fullWidth
                            />
                            <TextareaAutosizeElement
                                name={'description'}
                                label={'Description'}
                                control={control}
                                required
                                fullWidth
                            />
                            <Button type={"submit"} loading={isPending} size={"large"} variant="contained">
                                Create Token
                            </Button>
                        </Stack>
                    </form>
                </DialogContentText>
            </DialogContent>
        </Dialog>, open: () => setOpen(true), close: () => setOpen(false)
    };
}

export default useCreateToken;