const express = require('express');
//const request = require("request");


const app = express();
//const port = 80;

app.get('/', (req, res) => {
    res.send('Hello World!')
  //getToken(res);
});

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port `)
});