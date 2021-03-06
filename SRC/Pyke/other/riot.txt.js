const express = require('express');
const app = express();

module.exports = function(port, riot_txt) {
  return new Promise((resolve, reject) =>{
    try {
      app.listen(port); // Port for your application
      app.get('/riot.txt', (req, res) =>{
        res.send(riot_txt);   
      });
    } catch (err) {
      reject(err);
    }
   
  })
}
