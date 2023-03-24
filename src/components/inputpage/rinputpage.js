import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import GlobalStyles from '@mui/material/GlobalStyles';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const tiers = [
  {
    title: 'INVOICE',
    subheader: 'Invoice Ninja Logo',
    banner:'./logo192.png',
    price: '0',
    description: [
      '10 users included',
      '2 GB of storage',
      'Help center access',
      'Email support',
    ],
    buttonText: 'Sign up for free',
    buttonVariant: 'outlined',
  }
];


function PricingContent() {
  return (
    <React.Fragment>
      <GlobalStyles styles={{ ul: { margin: 0, padding: 0, listStyle: 'none' } }} />
      <CssBaseline />
      <AppBar
        position="static"
        color="default"
        elevation={0}
        sx={{ borderBottom: (theme) => `1px solid ${theme.palette.divider}` }}
      >
        <Toolbar sx={{ flexWrap: 'wrap', justifyContent:'center' }}>
          <Button href="#" variant="outlined" sx={{ my: 1, mx: 1.5 }}>
            Generate & Download PDF
          </Button>
          <Button href="#" variant="outlined" sx={{ my: 1, mx: 1.5 }}>
            Generate & Email PDF
          </Button>
        </Toolbar>
      </AppBar>

      <Container maxWidth={false} component="main" sx={{ pt: 3, pb: 3}}>
        <Grid container spacing={1} alignItems="flex-start">
          {tiers.map((tier) => (
            // Card is always at full width
            <Grid
              item
              key={tier.title}
              xs={12}
              sm={12}
              md={12}
            >
    <Card>
                <CardHeader
                  title={tier.title}
                  subheader={tier.subheader}
                  titleTypographyProps={{ align: 'left' }}
                  subheaderTypographyProps={{
                    align: 'right', mr:2
                  }}
                  sx={{
                    backgroundColor: (theme) =>
                      theme.palette.mode === 'light'
                        ? theme.palette.grey[200]
                        : theme.palette.grey[700],
                  }}
                />
                <Box item
                  xs={12}
                  sm={12}
                  md={12}>
                <img src={process.env.PUBLIC_URL + '/' + tier.banner} alt='' sx={{ width: '100%'}}></img>
                </Box>
    <CardContent>
      <Grid container xs={8}>
        <Grid item xs={6}>
          <Typography variant="h6" gutterBottom>
            Shipping address
          </Typography>
        </Grid>
        <Grid item xs={2}>
          <Typography variant="h6" gutterBottom>
            Rate
          </Typography>
        </Grid>
        <Grid item xs={1}>
          <Typography variant="h6" gutterBottom>
            Qty
          </Typography>
        </Grid>
        <Grid item xs={3}>
          <Typography variant="h6" gutterBottom>
            Line Total
          </Typography>
        </Grid>
        <Grid item xs={6}>
          <TextField
            required
            id="itemName"
            name="itemName"
            label="Your item name"
            fullWidth
            autoComplete="item-name"
            variant="standard"
          />
        </Grid>
        <Grid item xs={2}>
          <TextField
            required
            id="rate"
            name="rate"
            label="£"
            fullWidth
            autoComplete="rate"
            variant="standard"
          />
        </Grid>
        <Grid item xs={1}>
          <TextField
            required
            id="qty"
            name="qty"
            label="e.g. 1"
            fullWidth
            autoComplete="qty"
            variant="standard"
          />
        </Grid>
        <Grid item xs={3} >
          <Typography sx={{borderRadius: '4px',
              backgroundColor: '#fff',
              border: '1px solid #ced4da',
              fontSize: '1rem',
              padding: '5px 10px',
              textAlign:'center',
              }}>
          Line Total
          </Typography>
        </Grid>
      </Grid>
      <Grid container>

      </Grid>
    </CardContent>
    <CardActions>
      <Button fullWidth variant={tier.buttonVariant}>
        {tier.buttonText}
      </Button>
    </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
      {/* Footer */}
      <Container
        maxWidth="md"
        component="footer"
        sx={{
          borderTop: (theme) => `1px solid ${theme.palette.divider}`,
          mt: 8,
          py: [3, 6],
        }}
      >
        <Copyright sx={{ mt: 5 }} />
      </Container>
      {/* End footer */}
    </React.Fragment>
  );
}

export default function Input() {
  return <PricingContent />;
}