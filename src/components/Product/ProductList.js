import PropTypes from 'prop-types';
import { useState } from 'react';
import { useSelector } from 'react-redux';

// material-ui
import { useTheme } from '@mui/material/styles';
import { Grid, Typography } from '@mui/material';

// project imports
import ProductPlaceholder from 'components/cards/Skeleton/ProductPlaceholder';
import ProductCard from './ProductCard';
import { gridSpacing } from 'store/constant';

// data import
import ProductData from '../../dummy_data/ProductData';

const ProductList = ({ isLoading }) => {
    const theme = useTheme();
    return (
        <>
            <Grid container spacing={gridSpacing}>
                <Grid item xs={12}>
                    <Grid container direction="row" wrap="wrap">
                        {ProductData.map((item, index) => (
                            <Grid item sx={{ width: 250 }}>
                                <ProductCard product={item} />
                            </Grid>
                        ))}
                    </Grid>
                </Grid>
            </Grid>
        </>
    );
};

ProductList.propTypes = {
    isLoading: PropTypes.bool
};

export default ProductList;
