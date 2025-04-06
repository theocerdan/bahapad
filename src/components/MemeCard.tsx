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
  import { Token } from "../repository/TokenRepository";
  import { keyframes } from '@emotion/react';
  
  // Define a "pump fun" animation that animates scale, rotation, box-shadow, and background color.
  const pumpFun = keyframes`
    0% {
      transform: scale(1) rotate(0deg);
      background-color: #ff00ff; /* Bright Magenta */
      box-shadow: 0 0 0 rgba(255, 255, 255, 0);
    }
    20% {
      transform: scale(1.3) rotate(5deg);
      background-color: #ffff00; /* Bright Yellow */
      box-shadow: 0 0 20px rgba(255, 255, 255, 0.5);
    }
    40% {
      transform: scale(0.85) rotate(-5deg);
      background-color: #00ffff; /* Bright Cyan */
      box-shadow: 0 0 10px rgba(255, 255, 255, 0.3);
    }
    60% {
      transform: scale(1.1) rotate(3deg);
      background-color: #ff0000; /* Bright Red */
      box-shadow: 0 0 15px rgba(255, 255, 255, 0.4);
    }
    80% {
      transform: scale(0.95) rotate(-2deg);
      background-color: #00ff00; /* Bright Green */
      box-shadow: 0 0 5px rgba(255, 255, 255, 0.2);
    }
    100% {
      transform: scale(1) rotate(0deg);
      background-color: #f0f2f5; /* <-- Light gray (or your preferred final color) */
      box-shadow: 0 0 0 rgba(255, 255, 255, 0);
    }
  `;
import {useState} from "react";
import {SubmitHandler, useForm} from "react-hook-form";
import {TextFieldElement} from "react-hook-form-mui";
  
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

type LiquidityDepositInput = {
    tokenA: number;
    tokenB: number;
}

const MemeProject = ({ token }: { token: Token }) => {
    // Données d'exemple pour le projet meme coin

    const {control, handleSubmit} = useForm<LiquidityDepositInput>({
        defaultValues: {
            tokenA: 0,
            tokenB: 0,
        },
    })

    const [ratio, setRatio] = useState<number>(0);

    const onSubmit: SubmitHandler<LiquidityDepositInput> = (data) => {
        setRatio(data.tokenB / data.tokenA);
    }

    return (
      <Card
        sx={{
          animation: `${pumpFun} 0.8s ease-out`,
          // Remove any explicit backgroundColor here if you want the keyframes to handle it:
          // backgroundColor: 'white', // (Remove or change to #f0f2f5 if you prefer)
          width: '100%',
          maxWidth: 900,
          borderRadius: 3,
          boxShadow: 3,
          overflow: 'hidden',
          margin: 'auto',
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' }
        }}
      >
        <Box sx={{ width: "100%", display: 'flex', flexDirection: 'column' }}>
          <Box sx={{ p: 2, display: { xs: 'none', md: 'block' } }}>
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
  
          <CardContent sx={{
            flexGrow: 1,
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            gap: 3,
            p: 3
          }}>
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
              gap: 5,
              flex: 1
            }}>
              <Box sx={{display: 'grid', gridTemplateColumns: '120px 1fr', gap: 1}}>
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
                <Typography variant="body2" sx={{wordBreak: 'break-all'}}>
                  {token.address}
                </Typography>
  
                <Typography variant="body2" color="text.secondary" fontWeight="medium">
                  Owner:
                </Typography>
                <Typography variant="body2" sx={{wordBreak: 'break-all'}}>
                  {token.owner}
                </Typography>
              </Box>

                        <form onSubmit={handleSubmit(onSubmit)} noValidate>
                            {ratio == 0 && <Box sx={{display: 'flex', gap: 2}}>
                                <TextFieldElement name={'tokenA'} label={"$FTN"} control={control}/>
                                <TextFieldElement name={'tokenB'} label={'$' + token.symbol.toUpperCase()} control={control}/>
                                <Button type={"submit"} size={"small"} variant={"contained"}>Initialize liquidity
                                    pool</Button>
                            </Box>}
                        </form>
            </Box>
          </CardContent>
  
          <CardActions sx={{ p: 2, mt: 'auto' }}>
            <Button
              disabled={ratio == 0}
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
              {ratio == 0 ? "Initialize liquidity pool" : `1 FTN = ${ratio} ${token.symbol.toUpperCase()} (SilkSwap)`}
            </Button>
          </CardActions>
        </Box>
      </Card>
    );
  };
  
  export default MemeProject;
  