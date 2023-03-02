import { Auth0Provider } from '@auth0/auth0-react';
import { Box } from '@mui/material';
/* *** */
import AppMenu from './components/AppMenu';
import Portal from './components/Portal/Portal';

function App() {
  return (
    <Auth0Provider
      domain="dev-cd620u5oo8g3se5k.us.auth0.com"
      clientId="cJ1nbj0gLdEqlN4CLTCCgFK9aUXuISKY"
      authorizationParams={{
        redirect_uri: window.location.origin,
      }}
    >
      <AppMenu />
      <Box sx={{ padding: '50px 0' }}>
        <Portal />
      </Box>
    </Auth0Provider>
  );
}

export default App;
