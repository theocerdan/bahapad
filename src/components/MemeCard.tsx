import {
    Card,
    CardMedia,
    CardContent,
    CardActions,
    Typography,
    Button,
    Box,
    Chip,
    Divider,
    Link
} from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import {Token} from "../repository/TokenRepository.ts";

const formatTimestamp = (timestamp: number) => {
    const date = new Date(timestamp * 1000);
    return date.toLocaleDateString('en-US', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
    });
}
const MemeProject = ({ token }: { token: Token }) => {
    // Données d'exemple pour le projet meme coin

    return (
        <Card sx={{
            width: '100%',
            maxWidth: 900,
            borderRadius: 3,
            boxShadow: 3,
            overflow: 'hidden',
            margin: 'auto',
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' }
        }}>

            {/* Contenu principal */}
            <Box sx={{ width: "100%", display: 'flex', flexDirection: 'column' }}>
                <Box sx={{
                    backgroundColor: '#f0f2f5',
                    p: 2,
                    display: { xs: 'none', md: 'block' }
                }}>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <Typography variant="h5" component="div" sx={{ fontWeight: 'bold' }}>
                            {token.name}
                        </Typography>
                        <Chip
                            label={"$" + token.symbol}
                            variant="outlined"
                            color="primary"
                            sx={{ fontWeight: 'medium' }}
                        />
                    </Box>
                </Box>

                <Divider sx={{ display: { xs: 'none', md: 'block' } }} />

                {/* Informations principales */}
                <CardContent sx={{ flexGrow: 1, display: 'flex', flexDirection: 'row' }}>
                    <CardMedia
                        component="img"
                        image={token.url}
                        sx={{
                            objectFit: 'contain',
                            width: '250px',
                            height: '250px'
                        }}
                    />
                    <Box sx={{ display: 'flex', flexDirection: 'column', justifyCenter: 'center', gap: 1 }}>
                        <Typography variant="body2" color="text.secondary">
                            Description: {token.description}
                        </Typography>

                        <Typography variant="body2" color="text.secondary">
                            Launch Date: {formatTimestamp(token.launchDate)}
                        </Typography>

                        <Typography variant="body2" color="text.secondary">
                            Total Supply: {token.supply} ${token.symbol}
                        </Typography>

                        <Typography variant="body2" color="text.secondary">
                            Address: {token.address}
                        </Typography>

                        <Typography variant="body2" color="text.secondary">
                            Owner: {token.owner}
                        </Typography>
                    </Box>
                </CardContent>

                {/* Bouton d'achat */}
                <CardActions sx={{ p: 2, backgroundColor: '#f0f2f5', mt: 'auto' }}>
                    <Button
                        disabled={true}
                        variant="contained"
                        fullWidth
                        color="primary"
                        startIcon={<ShoppingCartIcon />}
                        component={Link}
                        href={"google.com"}
                        target="_blank"
                        sx={{
                            fontWeight: 'bold',
                            py: 1.2,
                            borderRadius: 2
                        }}
                    >
                        Buy on SilkSwap (SOON)
                    </Button>
                </CardActions>
            </Box>
        </Card>
    );
};

export default MemeProject;