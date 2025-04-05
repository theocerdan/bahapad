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
                    p: 2,
                    display: { xs: 'none', md: 'block' }
                }}>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <Typography variant="h5" component="div" sx={{ fontWeight: 'bold' }}>
                            {token.name}
                        </Typography>
                        <Chip
                            label={"$" + token.symbol.toUpperCase()}
                            variant="outlined"
                            color="primary"
                            sx={{ fontWeight: 'medium' }}
                        />
                    </Box>
                </Box>

                <Divider sx={{ display: { xs: 'none', md: 'block' } }} />

                {/* Informations principales */}
                <CardContent sx={{ flexGrow: 1, display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 3, p: 3 }}>
                    <CardMedia
                        component="img"
                        image={token.url}
                        sx={{
                            objectFit: 'contain',
                            width: { xs: '100%', md: '250px' },
                            height: '250px',
                            borderRadius: 2
                        }}
                    />
                    <Box sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        gap: 2,
                        flex: 1
                    }}>

                        <Box sx={{ display: 'grid', gridTemplateColumns: '120px 1fr', gap: 1 }}>
                            <Typography variant="body2" color="text.secondary" fontWeight="medium">
                                Description:
                            </Typography>
                            <Typography variant="body2">
                                {token.description}
                            </Typography>

                            <Typography variant="body2" color="text.secondary" fontWeight="medium">
                                Launch Date:
                            </Typography>
                            <Typography variant="body2">
                                {formatTimestamp(token.launchDate)}
                            </Typography>

                            <Typography variant="body2" color="text.secondary" fontWeight="medium">
                                Total Supply:
                            </Typography>
                            <Typography variant="body2">
                                {token.supply} ${token.symbol.toUpperCase()}
                            </Typography>

                            <Typography variant="body2" color="text.secondary" fontWeight="medium">
                                Address:
                            </Typography>
                            <Typography variant="body2" sx={{ wordBreak: 'break-all' }}>
                                {token.address}
                            </Typography>

                            <Typography variant="body2" color="text.secondary" fontWeight="medium">
                                Owner:
                            </Typography>
                            <Typography variant="body2" sx={{ wordBreak: 'break-all' }}>
                                {token.owner}
                            </Typography>
                        </Box>
                    </Box>
                </CardContent>
                {/* Bouton d'achat */}
                <CardActions sx={{ p: 2, mt: 'auto' }}>
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