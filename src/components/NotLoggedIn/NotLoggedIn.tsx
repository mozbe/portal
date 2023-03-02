import { Card, CardContent, Stack, Typography } from '@mui/material';

export function NotLoggedIn() {
  return (
    <Stack
      direction="row"
      justifyContent="center"
      alignItems="center"
      sx={{ paddingTop: '100px', width: '100%'}}
    >
      <Card>
        <CardContent sx={{ paddingTop: '20px'}}>
          <Typography variant="h6" color="text.primary" gutterBottom>
            Ooops:
          </Typography>
          <Typography variant="body2" color="text.secondary">
            You are not authorised to view this section. Please log in.
          </Typography>
        </CardContent>
      </Card>
    </Stack>
  );
}

export default NotLoggedIn;
