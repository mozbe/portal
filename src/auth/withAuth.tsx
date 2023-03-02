import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { CircularProgress, Stack } from '@mui/material';
/* *** */
import NotLoggedIn from '../components/NotLoggedIn';

export function withAuth(Component: React.ComponentType) {
  return function requireAuth(props: any) {
    const {isAuthenticated, isLoading } = useAuth0();

    if (isLoading) {
      return (
        <Stack
          direction="row"
          justifyContent="center"
          alignItems="center"
          sx={{ height: '50vh'}}
        >
          <CircularProgress color="secondary" />
        </Stack>
      );
    }

    if (!isAuthenticated) {
      return <NotLoggedIn />;
    }

    if (isAuthenticated) {
      return <Component {...props} />;
    }

    return null;
  };
}
