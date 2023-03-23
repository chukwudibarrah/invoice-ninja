import React from 'react';
import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
import { Wrapper } from 'pdfmake-wrapper';

// Register fonts with pdfmake
pdfMake.vfs = pdfFonts.pdfMake.vfs;

function Pdf() {

  const generatePdf = async () => {
    // Create a new pdfmake-wrapper instance
    const doc = new Wrapper();

    // Add content to the document
    doc.add('Hello, world!');

    // Generate the PDF and open it in a new tab
    const pdf = await doc.createPdf().getBlobUrl();
    window.open(pdf, '_blank');
  }

  return (
    <button onClick={generatePdf}>Generate PDF</button>
  );
}

export default Pdf;
