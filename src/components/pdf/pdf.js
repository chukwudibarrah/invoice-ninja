import React from 'react';
import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
import { PdfMakeWrapper } from 'pdfmake-wrapper';

// Register fonts with pdfmake
pdfMake.vfs = pdfFonts.pdfMake.vfs;

function Pdf() {

  const generatePdf = async () => {
    // Create a new pdfmake-wrapper instance
    const doc = new PdfMakeWrapper();

    // Add content to the document
    doc.add('This is a test');

    // Generate the PDF and open it in a new tab
    const pdf = await doc.create().download();
    window.open(pdf, '_blank');
  }

  return (
    <button onClick={generatePdf}>Generate PDF</button>
  );
}

export default Pdf;