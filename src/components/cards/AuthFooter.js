// material-ui
import { Link, Typography, Stack } from '@mui/material';

// ==============================|| FOOTER - AUTHENTICATION 2 & 3 ||============================== //

const AuthFooter = () => (
    <Stack direction="row" justifyContent="space-between">
        <Typography variant="subtitle2" component={Link} href="http://localhost" target="_blank" underline="hover">
            Home Page
        </Typography>
        <Typography variant="subtitle2" component={Link} href="http://localhost" target="_blank" underline="hover">
            &copy; Strategic Growth Studios
        </Typography>
    </Stack>
);

export default AuthFooter;
