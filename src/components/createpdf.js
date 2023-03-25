const request = require('request');

function CreatePdf () {

const options = {
  method: 'POST',
  url: 'https://api.doppio.sh/v1/render/pdf/sync',
  headers: {
    'Authorization': 'Bearer b0f3dd41808ba539663d5d43',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    page: {
      pdf: {
        printBackground: true
      },
      goto: {
        url: 'https://thriving-kelpie-1149f6.netlify.app/'
      }
    }
  })
};

request(options, function (error, response) {
  if (error) throw new Error(error);
  console.log(response.body);
});
}

export default CreatePdf;