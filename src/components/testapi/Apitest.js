import React, { useState } from "react";
import axios from "axios";
import fs from "fs";

export default function ApiTest() {
  //   const [rapidApiKey, setRapidApiKey] = useState('986a31afd6msh70b4359f67a0553p137899jsnbdbfad1c8dda');
  //   const [htmlContent, setHtmlContent] = useState('<HTML CONTENT TO RENDER>');
  //   const [uri, setUri] = useState('https://www.google.com?hl=en');
  //   const [taskId, setTaskId] = useState('');
  //   const [status, setStatus] = useState('Waiting');

  //   const submitPdfFromHtmlTask = async () => {
  //     const formData = new FormData();
  //     formData.append('uri', uri);
  //     formData.append('useCompression', 'false');
  //     formData.append('pageLabel', 'Home Page');
  //     formData.append('messageLabel', 'Initial Capture');
  //     formData.append('browserHeight', '768');
  //     formData.append('browserWidth', '1024');
  //     formData.append('htmlContent', htmlContent);

  //     const headers = { 'X-RapidAPI-Key': rapidApiKey };

  //     try {
  //       const response = await axios.post(
  //         'https://web-renderer.p.rapidapi.com/SubmitPDFFromUrlTask',
  //         formData,
  //         { headers }
  //       );
  //       if (response.status !== 200) {
  //         throw new Error('Cannot create task');
  //       }
  //       setTaskId(response.data);
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   };

  //   const getRenderingTaskStatus = async () => {
  //     const params = { taskId };
  //     const headers = { 'X-RapidAPI-Key': rapidApiKey };

  //     try {
  //       const response = await axios.get(
  //         'https://web-renderer.p.rapidapi.com/GetRenderingTaskStatus',
  //         { params, headers }
  //       );
  //       if (response.status !== 200) {
  //         throw new Error('Cannot check task status');
  //       }
  //       setStatus(response.data);
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   };

  //   const downloadResult = async () => {
  //     const params = { taskId };
  //     const headers = { 'X-RapidAPI-Key': rapidApiKey, responseType: 'blob' };

  //     try {
  //       const response = await axios.get(
  //         'https://web-renderer.p.rapidapi.com/DownloadResult',
  //         { params, headers }
  //       );
  //       if (response.status !== 200) {
  //         throw new Error('Cannot download file');
  //       }
  //       const fileUrl = window.URL.createObjectURL(new Blob([response.data]));
  //       const fileLink = document.createElement('a');
  //       fileLink.href = fileUrl;
  //       fileLink.setAttribute('download', 'html_from_html.pdf');
  //       document.body.appendChild(fileLink);
  //       fileLink.click();
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   };

  //   const handleRenderPdf = async () => {
  //     await submitPdfFromHtmlTask();
  //     let retryCount = 0;
  //     while (retryCount < 100) {
  //       retryCount++;
  //       await new Promise((resolve) => setTimeout(resolve, 5000));
  //       await getRenderingTaskStatus();
  //       if (status === 'Completed') {
  //         await downloadResult();
  //         break;
  //       } else if (status === 'Waiting') {
  //         continue;
  //       } else if (status === 'Failed') {
  //         throw new Error('Cannot render html');
  //       } else {
  //         throw new Error('Invalid status');
  //       }
  //     }
  //   };

  const handleRenderPdf = async () => {
    console.log('button clicked!');
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
      <button onClick={handleRenderPdf}>Render PDF</button>
    </div>
  );
}
