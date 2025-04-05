import {AppBar, Box, Button, Dialog, Divider, IconButton, Paper, Toolbar, Typography} from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import {useAccount, useConnect, useDisconnect} from "wagmi";
import {useEffect, useState} from "react";
import useCreateToken from "./CreateTokenDialog.tsx";

const Navbar = () => {

    const { connectors, connect } = useConnect()
    const { disconnect } = useDisconnect()
    const { isConnected } = useAccount()
    const { dialog: tokenDialog, open: openCreateTokenDialog } = useCreateToken();
    const [openWalletConnection, setOpenWalletConnection] = useState<boolean>(false);

    useEffect(() => {
        if (isConnected && openWalletConnection)
            setOpenWalletConnection(false);
    }, [isConnected]);

    return (
        <>
            {tokenDialog}
            <Dialog open={openWalletConnection} onClose={() => setOpenWalletConnection(false)}>
                <Box sx={{ display: 'flex', flexDirection: 'column', m: 3, gap: 2 }}>
                    {connectors.map((connector) => (
                        <Button key={connector.uid} onClick={() => connect({connector})}>
                            {connector.name}
                        </Button>
                    ))}
                </Box>
            </Dialog>
                <AppBar position={"static"}>
                    <Toolbar>
                        <IconButton
                            color="inherit"
                            edge="start"
                            sx={{ mr: 2, display: { sm: 'none' } }}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Box component="div" sx={{ flexGrow: 1, display: "flex", alignItems: 'center', gap: 1 }}>
                            <Typography
                                variant="h6"
                                fontWeight={"bold"}
                            >
                                BAHAPAD 🐸
                            </Typography>
                            <Divider orientation="vertical" flexItem />
                            <Typography>Launch Memes. Print Dreams.</Typography>
                        </Box>
                        <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                            {isConnected ?
                                <Box sx={{ display: 'flex', gap: 2 }}>
                                    <Button size={"large"} variant={"outlined"} sx={{color: '#fff'}} onClick={() => openCreateTokenDialog()}>
                                        Create token
                                    </Button>
                                    <Button size={"large"} variant={"outlined"} sx={{color: '#fff'}} onClick={() => disconnect()}>
                                        Disconnect
                                    </Button>
                                </Box> : <Button sx={{color: '#fff'}} onClick={() => setOpenWalletConnection(true)}>
                                Connect
                            </Button>}
                        </Box>
                    </Toolbar>
                </AppBar>

            </>);
}

export default Navbar;