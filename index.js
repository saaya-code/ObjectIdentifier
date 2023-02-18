const express = require('express');
const app = express();
const port = 3000;
const getData = require('./getData.js');



app.get('/', async (req, res) => {
  try{
    const {word} = req.query;
    const result = await getData(word);
    res.send(result).status(200);
  }catch(err){
    res.send(err).status(500);
  }
})



app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})