import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import "./navbar.css"

function Navbar(props) {
  return (
    <AppBar
    position="static"
    color="default"
    elevation={0}
    sx={{ borderBottom: (theme) => `1px solid ${theme.palette.divider}` }}
  >
    <Toolbar sx={{ flexWrap: 'wrap' }}>
      <Typography variant="h6" color="inherit" noWrap sx={{ flexGrow: 1 }}>
        Invoice Ninja
      </Typography>
      <Button href="#home" key='home' onClick={() => props.handlePageChange('home')} class={props.currentPage === 'home' ? "nav-link active" : "nav-link"} variant="outlined" sx={{ my: 1, mx: 1.5 }}>
            Home
      </Button>
      <Button href="#input" key='input' onClick={() => props.handlePageChange('input')} class={props.currentPage === 'input' ? "nav-link active" : "nav-link"} variant="outlined" sx={{ my: 1, mx: 1.5 }}>
            Input Page
      </Button>
    </Toolbar>
  </AppBar>
  );
}

export default Navbar;