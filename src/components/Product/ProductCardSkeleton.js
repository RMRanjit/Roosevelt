// material-ui
import { CardContent, Grid, Skeleton, Stack, Typography, Image } from '@mui/material';

// project import
import MainCard from '../cards/MainCard';

const ProductCardSkeleton = ({ product }) => (
    <MainCard content={false} boxShadow>
        <img src={product.src} alt={product.name} height={100} />
        <CardContent sx={{ p: 2 }}>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <Stack direction="row" alignItems="center" spacing={1}>
                        <Skeleton variant="rectangular" height={20} width={50} />
                        <Skeleton variant="rectangular" height={20} width={30} />
                    </Stack>
                </Grid>

                <Grid item xs={12}>
                    <Skeleton variant="rectangular" height={20} width={90} />
                </Grid>
            </Grid>
        </CardContent>
    </MainCard>
);

export default ProductCardSkeleton;
