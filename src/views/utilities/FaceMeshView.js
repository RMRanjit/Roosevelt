import PropTypes from 'prop-types';

// material-ui
import { Box, Card } from '@mui/material';
import ProductScroll from 'components/Product/ProductScroll';

// Data
import ProductData from '../../dummy_data/ProductData';

// project imports
import FaceMeshMediapipe from 'components/Mediapipe/FaceMeshMediapipe';

const FaceMeshView = ({ bgcolor, title, data, dark }) => (
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
                <FaceMeshMediapipe />
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
);

export default FaceMeshView;
