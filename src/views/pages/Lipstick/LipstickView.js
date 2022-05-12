import { useEffect, useState } from 'react';

// material-ui
import { Box, Card, CardContent, Grid, Skeleton, Stack, Typography, Image } from '@mui/material';
import { gridSpacing } from 'store/constant';

import Lipstick from 'components/Lipstick/Lipstick';
import ProductScroll from 'components/Product/ProductScroll';

// Data
import ProductData from '../../../dummy_data/ProductData';

const LipstickView = ({ bgcolor, title, data, dark }) => {
    const [isLoading, setLoading] = useState(true);
    const [color, setColor] = useState('rgba(226, 25, 44, 0.64)');

    useEffect(() => {
        setLoading(false);
    }, []);

    return (
        <>
            <Card sx={{ mb: 3 }}>
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        py: 4.5,
                        bgcolor,
                        color: dark ? 'grey.800' : '#ffffff'
                    }}
                >
                    <Lipstick height={480} width={640} color={color} data={ProductData.filter((item) => item.type === 'lipstick')} />
                </Box>

                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        py: 4.5,
                        bgcolor,
                        color: dark ? 'grey.800' : '#ffffff'
                    }}
                >
                    <ProductScroll
                        data={ProductData.filter((item) => item.type === 'lipstick')}
                        cols={7}
                        height={75}
                        itemSelected={(product) => {
                            console.log(product.color);
                        }}
                    />
                </Box>
            </Card>
        </>

        // <>
        //     <div>
        //         <div style={{ position: 'relative', width: 640, alignContent: 'center', justifyContent: 'center' }}>
        //             <ProductScroll
        //                 data={ProductData.filter((item) => item.type === 'lipstick')}
        //                 cols={7}
        //                 height={75}
        //                 itemSelected={(product) => {
        //                     console.log(product.color);
        //                     setColor(product.color);
        //                 }}
        //             />
        //         </div>
        //         <div>
        //             <Lipstick height={480} width={640} color={color} data={ProductData.filter((item) => item.type === 'lipstick')} />
        //         </div>
        //     </div>
        // </>
    );
};

export default LipstickView;
