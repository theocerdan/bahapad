import './App.css'
import Leaderboard from "./pages/Leaderboard.tsx";
import Navbar from "./components/Navbar.tsx";
import {WagmiProvider} from "wagmi";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import {config} from "./config.ts";
import {ConnectKitProvider} from "connectkit";
import {CssBaseline, ThemeProvider} from "@mui/material";
import neonGreenDarkTheme from "./theme.ts";

const queryClient = new QueryClient()

function App() {

  return (
    <>
        <ThemeProvider theme={neonGreenDarkTheme} defaultMode={"dark"}>
            <CssBaseline />
            <WagmiProvider config={config}>
                <QueryClientProvider client={queryClient}>
                    <ConnectKitProvider>
                        <Navbar />
                        <div style={{ display: 'flex', width: '100%', gap: 10, marginTop: '25px' }}>
                            <Leaderboard />
                        </div>
                    </ConnectKitProvider>
                </QueryClientProvider>
            </WagmiProvider>
        </ThemeProvider>
    </>
  )
}

export default App
