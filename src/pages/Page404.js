import { Link as RouterLink } from 'react-router-dom';
// @mui
import { styled } from '@mui/material/styles';
import { Button, Typography, Container, Box } from '@mui/material';
// components
import Page from '../components/Page';

// ----------------------------------------------------------------------

const ContentStyle = styled('div')(({ theme }) => ({
  maxWidth: 480,
  margin: 'auto',
  minHeight: '100vh',
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'column',
  padding: theme.spacing(12, 0)
}));

// ----------------------------------------------------------------------

export default function Page404() {
  return (
    <Page title="404 Página no encontrada">
      <Container>
        <ContentStyle sx={{ textAlign: 'center', alignItems: 'center' }}>
          <Typography variant="h3" paragraph>
            Lo sentimos, Rivia no ha podido encontrar esta página!
          </Typography>

          <Typography sx={{ color: 'text.secondary' }}>
            Código de error 404, no se ha podido encontrar la página, porfavor compruebe la URL.
          </Typography>

          <Box
            component="img"
            src="/static/images/logo.png"
            sx={{ height: 260, mx: 'auto', my: { xs: 5, sm: 10 } }}
          />

          <Button to="/" size="large" variant="contained" component={RouterLink}>
            Volver
          </Button>
        </ContentStyle>
      </Container>
    </Page>
  );
}
