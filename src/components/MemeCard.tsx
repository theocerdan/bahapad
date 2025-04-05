// MemeProjectHorizontalCard.jsx
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
    Grid,
    Link
} from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import {Token} from "../repository/TokenRepository.ts";

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
                    <Grid container spacing={2}>
                        {/* Informations clés */}
                        <Grid size={{ xs: 12, md: 7}}>
                            <Grid container spacing={2}>
                                <Grid size={{ xs: 6 }}>
                                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                                        <CalendarTodayIcon sx={{ mr: 1, color: 'text.secondary', fontSize: 20 }} />
                                        <Typography variant="body2" color="text.secondary">
                                            Lancé le
                                        </Typography>
                                    </Box>
                                    <Typography variant="body1" sx={{ fontWeight: 'medium' }}>
                                        {token.launchDate}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        (toto)
                                    </Typography>
                                </Grid>
                                <Grid size={{ xs: 6 }}>
                                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                                        <LocalOfferIcon sx={{ mr: 1, color: 'text.secondary', fontSize: 20 }} />
                                        <Typography variant="body2" color="text.secondary">
                                            Supply totale
                                        </Typography>
                                    </Box>
                                    <Typography variant="body1" sx={{ fontWeight: 'medium' }}>
                                        {token.supply}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        {token.symbol}
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Grid>

                        {/* Description */}
                        <Grid size={{ xs: 12, md: 5 }} >
                            <Typography variant="body2" color="text.secondary">
                                {token.description}
                            </Typography>
                        </Grid>
                    </Grid>
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
                        Buy on Fastex (SOON)
                    </Button>
                </CardActions>
            </Box>
        </Card>
    );
};

export default MemeProject;