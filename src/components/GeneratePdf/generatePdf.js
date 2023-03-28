import React, { useState } from "react";
import axios from "axios";

export default function GeneratePdf() {
  const handleRenderPdf = async () => {
    console.log("button clicked!");
    const encodedParams = new URLSearchParams();
    encodedParams.append("uri", "http://google.com/");
    encodedParams.append("browserWidth", "1024");
    encodedParams.append("browserHeight", "768");
    encodedParams.append("pageLabel", "Home Page");
    encodedParams.append("messageLabel", "Initial Capture");
    encodedParams.append("useCompression", "false");

    const options = {
      method: "POST",
      url: "https://web-renderer.p.rapidapi.com/CreatePDFFromUrl",
      headers: {
        "content-type": "application/x-www-form-urlencoded",
        "X-RapidAPI-Key": "986a31afd6msh70b4359f67a0553p137899jsnbdbfad1c8dda",
        "X-RapidAPI-Host": "web-renderer.p.rapidapi.com",
      },
      data: encodedParams,
      responseType: "arraybuffer",
    };

    axios
      .request(options)
      .then(function (response) {
        const pdfData = new Blob([response.data], { type: "application/pdf" });
        const pdfUrl = URL.createObjectURL(pdfData);
        window.open(pdfUrl, "_blank");
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  return (
    <div>
      <Button onClick={handleRenderPdf} href="#" variant="outlined" sx={{ my: 1, mx: 1.5 }}>
        Generate & Download PDF
      </Button>
      <button onClick={handleRenderPdf}>Render PDF</button>
    </div>
  );
}
