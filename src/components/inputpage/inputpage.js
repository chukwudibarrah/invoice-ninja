import React, { useState, useRef } from 'react';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import AddIcon from '@mui/icons-material/Add';
import IconButton from '@mui/material/IconButton';
import { Table, TableBody, TableHead, TableRow, TableCell,} from '@mui/material';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import './inputpage.css';


function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link
        color="inherit"
        href="https://thriving-kelpie-1149f6.netlify.app/#Home"
      >
        InvoiceNinja
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const images = {
  banner:'./invoice.png'
}



function PricingContent() {
  const [lineItems, setLineItems] = useState([]);

  const handleAddLineItem = () => {
    setLineItems([...lineItems, { description: "", rate: "", qty: "" }]);
  };

  const handleChangeLineItem = (index, key, value) => {
    const newLineItems = [...lineItems];
    newLineItems[index][key] = value;
    setLineItems(newLineItems);
  };

  const calculateSubtotal = () => {
    return lineItems.reduce((acc, item) => {
      const lineTotal = parseFloat(item.rate) * parseFloat(item.qty);
      return acc + (isNaN(lineTotal) ? 0 : lineTotal);
    }, 0);
  };

  const calculateTax = (subtotal) => {
    return subtotal * 0.2;
  };

  const calculateTotal = (subtotal, tax) => {
    return subtotal + tax;
  };

  const subtotal = calculateSubtotal();
  const tax = calculateTax(subtotal);
  const total = calculateTotal(subtotal, tax);



  const screenshotRef = useRef();

  const captureScreenshot = async () => {
    try {
      const canvas = await html2canvas(screenshotRef.current);
      const imgData = canvas.toDataURL('image/png');

            // Create a new jsPDF instance
            const pdf = new jsPDF('p', 'mm', 'a4');

            // Calculate the width and height of the content to fit on a single A4 page
            const pageWidth = pdf.internal.pageSize.getWidth();
            const pageHeight = pdf.internal.pageSize.getHeight();
            const imgWidth = canvas.width;
            const imgHeight = canvas.height;
            const widthRatio = pageWidth / imgWidth;
            const heightRatio = pageHeight / imgHeight;
            const ratio = Math.min(widthRatio, heightRatio);
      
            const scaledWidth = imgWidth * ratio;
            const scaledHeight = imgHeight * ratio;
      
            // Add the image to the PDF
            pdf.addImage(imgData, 'PNG', 0, 0, scaledWidth, scaledHeight);
      
            // Save the PDF
            pdf.save('invoice.pdf');

      // const link = document.createElement('a');
      // link.href = imgData;
      // link.download = 'invoice.png';
      // document.body.appendChild(link);
      // link.click();
      // document.body.removeChild(link);
    } catch (err) {
      console.error('Error capturing screenshot:', err);
    }
  };



  return (
    <React.Fragment>
      {/* Appbar with the buttons to generate and download the PDF */}
      <AppBar position="static" color="default" elevation={0} sx={{ borderBottom: (theme) => `1px solid ${theme.palette.divider}` }}>
        <Toolbar sx={{ flexWrap: 'wrap', justifyContent:'center' }}>
          <Button onClick={captureScreenshot} variant="outlined" sx={{ my: 1, mx: 1.5 }} className= "btn1">
            Generate & Download PDF
          </Button>
        </Toolbar>
      </AppBar>


      <Card position='relative' ref={screenshotRef} sx={{m:2, p:2}}>
          {/* Hero unit */}
          <Container className='hero' component="main" sx={{pb: 4 }} >
            <Typography
              className='hero-text'
              component="h1"
              variant="h2"
              align="center"
              color="white"
              backgroundColor="#767793"
            >
              Invoice
            </Typography>
            <img
              className='logo_input'
              src={process.env.PUBLIC_URL + '/' + images.banner}
               alt="banner"
               style={{width: '100%' }}
            />
          </Container>
          {/* End hero unit */}
        <CardContent className="form-content">
          <Grid container spacing={3}>
            <Grid item xs={8}>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>Description</TableCell>
                    <TableCell>Rate</TableCell>
                    <TableCell>Qty</TableCell>
                    <TableCell>Line Total</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {lineItems.map((item, index) => (
                    <TableRow key={index}>
                      <TableCell>
                        <TextField
                          value={item.description}
                          onChange={(e) =>
                            handleChangeLineItem(
                              index,
                              "description",
                              e.target.value
                            )
                          }
                          required
                          fullWidth
                          id="description"
                          label="Service Description"
                          variant="standard"
                        />
                      </TableCell>
                      <TableCell>
                        <TextField
                          value={item.rate}
                          onChange={(e) =>
                            handleChangeLineItem(index, "rate", e.target.value)
                          }
                          InputProps={{
                            startAdornment: (
                              <InputAdornment position="start">
                                £
                              </InputAdornment>
                            ),
                          }}
                          required
                          fullWidth
                          id="rate"
                          label="e.g. 200"
                          variant="standard"
                        />
                      </TableCell>
                      <TableCell>
                        <TextField
                          value={item.qty}
                          onChange={(e) =>
                            handleChangeLineItem(index, "qty", e.target.value)
                          }
                          required
                          fullWidth
                          id="qty"
                          label="e.g. 1"
                          variant="standard"
                        />
                      </TableCell>
                      <TableCell>
                        {parseFloat(item.rate) * parseFloat(item.qty) || 0}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>

              <IconButton onClick={handleAddLineItem}>
                <AddIcon />
              </IconButton>

              <Grid container className= "grid">
                <Grid item xs={4}>

                </Grid>
                <Grid item xs={8} sx={{p:3, mb:2}}>
                  <Grid container>
                    <Grid item xs={7} sx={{ mb: 1 }}>
                      <Typography>Subtotal:</Typography>
                    </Grid>
                    <Grid align="center" item xs={5}>
                      <Typography>£{subtotal.toFixed(2)}</Typography>
                    </Grid>
                    <Grid item xs={7} sx={{ mb: 1 }}>
                      <Typography>Tax:</Typography>
                    </Grid>
                    <Grid align="center" item xs={5}>
                      <Typography>£{tax.toFixed(2)}</Typography>
                    </Grid>
                    <Grid item xs={7} sx={{ mt: 1 }}>
                      <Typography variant="h4">Amount Still Due:</Typography>
                    </Grid>
                    <Grid
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                      item
                      xs={5}
                    >
                      <Typography>
                        £{(total - parseFloat(0)).toFixed(2)}
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>

              <TextField
                label="Notes"
                fullWidth
                multiline
                rows={3}
                margin="normal"
                variant="standard"
              />
              <TextField
                label="Terms"
                fullWidth
                multiline
                rows={2}
                margin="normal"
                variant="standard"
              />
            </Grid>

            <Grid item xs={4}>
              <Typography align="center" variant="h4">
                Amount still due:
              </Typography>
              <Typography align="center" variant="h3">
                £{(total - parseFloat(0)).toFixed(2)}
              </Typography>
              <TextField
                label="Billed to"
                margin="normal"
                fullWidth
                variant="standard"
              />
              <TextField
                label="Address"
                fullWidth
                margin="normal"
                multiline
                rows={5}
                variant="standard"
              />
              <TextField
                label="Invoice number"
                fullWidth
                margin="normal"
                variant="standard"
              />
              <TextField
                label="Date Issued"
                type="date"
                fullWidth
                margin="normal"
                InputLabelProps={{
                  shrink: true,
                }}
              />
              <TextField
                label="Date Due"
                type="date"
                fullWidth
                margin="normal"
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </Grid>
          </Grid>
        </CardContent>
      </Card>

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
