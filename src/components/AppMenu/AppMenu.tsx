import { useAuth0 } from '@auth0/auth0-react';
import { AppBar, Box, Toolbar, Typography } from '@mui/material';
/* *** */
import LoginButton from '../LoginButton';
import LogoutButton from '../LogoutButton';

const AppMenu = () => {
  const { isAuthenticated } = useAuth0();
  const action = isAuthenticated ? <LogoutButton /> : <LoginButton />;

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>Portal</Typography>
          {action}
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default AppMenu;
