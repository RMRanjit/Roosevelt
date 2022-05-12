// material-ui
import { CardContent, Grid, Skeleton, Stack, Typography, Image } from '@mui/material';

// project import
import MainCard from '../cards/MainCard';

const ProductCard = ({ product }) => (
    <MainCard content={false} boxShadow>
        <CardContent sx={{ p: 2 }}>
            <Grid container spacing={2}>
                <Grid item xs={12} justifyContent="center" alignItems="center">
                    <img src={product.src} alt={product.name} height={100} />
                </Grid>
                <Grid item xs={12}>
                    <Stack direction="row" alignItems="center" spacing={1}>
                        <Typography variant="subTitle">{product.title.substring(0, 20)}</Typography>
                        <Typography variant="h3" alignItems="right">
                            {product.price}
                        </Typography>
                    </Stack>
                </Grid>

                <Grid item xs={12}>
                    {product.description.substring(0, 20)}
                </Grid>
                <Grid item xs={12}>
                    {/* {product.src} */}
                </Grid>
            </Grid>
        </CardContent>
    </MainCard>
);

export default ProductCard;
