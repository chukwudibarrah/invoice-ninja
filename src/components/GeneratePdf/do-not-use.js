import React from "react";
import fetch from "node-fetch";
// import Buffer from 'buffer';
import { Buffer } from "buffer";

const html = `<!DOCTYPE html>
<html>
  <body>
    <h1>This a heading</h1>
    <p>This a paragraph</p>
  </body>
</html>`;

export default function TestApi() {
  function handleConversion() {
    console.log("Button clicked!");

    const url = "https://docamatic.com/api/v1/pdf";
    const token = new Buffer(
      process.env.XzilwnJEsBGeTFUBiFc0CIDUJ5yp5h4gHrFR8bk8 + ":"
    ).toString("base64");

    async function convert() {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          source: html,
          width: 4,
          height: 6,
          unit: "in",
          test: true,
          encode: true,
        }),
      });

      const json = await response.json();
      console.log(json);
    }

    convert();
  }

  return (
    <div>
      <button onClick={handleConversion}>Generate PDF</button>
    </div>
  );
}
