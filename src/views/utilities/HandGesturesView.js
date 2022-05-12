import PropTypes from 'prop-types';

// material-ui
import { Box, Card } from '@mui/material';

// project imports
import HandsGestureMediaPipe from 'components/Mediapipe/HandGestureMediaPipe';



const HandGesturesView = ({ bgcolor, title, data, dark }) => (
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
                <HandsGestureMediaPipe />
            </Box>
        </Card>
    </>
);

export default HandGesturesView;
