import { createTheme } from '@mui/material/styles';

const neonGreenDarkTheme = createTheme({
    palette: {
        mode: 'dark',
        primary: {
            main: '#39FF14', // Vert néon vif
            light: '#7AFF59',
            dark: '#2BBB00',
            contrastText: '#000000',
        },
        secondary: {
            main: '#00FFDD', // Cyan néon complémentaire
            light: '#73FFE9',
            dark: '#00BBAA',
            contrastText: '#000000',
        },
        background: {
            default: '#121212', // Fond très sombre
            paper: '#1E1E1E',   // Légèrement plus clair pour les cartes/surfaces
        },
        text: {
            primary: '#FFFFFF',
            secondary: '#AAAAAA',
        },
        divider: 'rgba(57, 255, 20, 0.3)', // Vert néon transparent pour les séparateurs
        error: {
            main: '#FF5252',
        },
        warning: {
            main: '#FFB74D',
        },
        info: {
            main: '#64B5F6',
        },
        success: {
            main: '#81C784',
        },
    },
    typography: {
        fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
        button: {
            textTransform: 'none', // Boutons sans majuscules forcées
            fontWeight: 500,
        },
    },
    shape: {
        borderRadius: 8, // Coins légèrement arrondis
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    borderRadius: 6,
                    boxShadow: '0 0 8px rgba(57, 255, 20, 0.5)', // Lueur néon autour des boutons
                    '&:hover': {
                        boxShadow: '0 0 15px rgba(57, 255, 20, 0.8)', // Lueur plus intense au survol
                    },
                },
                containedPrimary: {
                    color: '#000000', // Texte noir pour contraster avec le vert néon
                },
            },
        },
        MuiCard: {
            styleOverrides: {
                root: {
                    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.5), 0 0 10px rgba(57, 255, 20, 0.2)', // Ombre avec légère lueur néon
                    border: '1px solid rgba(57, 255, 20, 0.1)', // Bordure subtile néon
                },
            },
        },
        MuiAppBar: {
            styleOverrides: {
                root: {
                    backgroundImage: 'linear-gradient(90deg, #121212 0%, #1a1a1a 100%)', // Dégradé subtil
                    boxShadow: '0 2px 10px rgba(57, 255, 20, 0.3)', // Ombre verte néon
                },
            },
        },
        MuiSwitch: {
            styleOverrides: {
                switchBase: {
                    '&.Mui-checked': {
                        '& + .MuiSwitch-track': {
                            backgroundColor: '#39FF14', // Vert néon pour le fond du switch activé
                        },
                    },
                },
                thumb: {
                    boxShadow: '0 0 5px rgba(57, 255, 20, 0.5)', // Lueur sur le bouton du switch
                },
            },
        },
    },
});

export default neonGreenDarkTheme;
