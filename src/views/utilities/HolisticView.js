import PropTypes from 'prop-types';

// material-ui
import { Box, Card } from '@mui/material';

// project imports
import HolisticMediaPipe from 'components/Mediapipe/HolisticMediapipe';

const HolisticView = ({ bgcolor, title, data, dark }) => (
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
                <HolisticMediaPipe />
            </Box>
        </Card>
    </>
);

export default HolisticView;
