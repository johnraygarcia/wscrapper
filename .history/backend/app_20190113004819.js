const express = require('express');
const $ = require('cheerio');
const rp = require('request-promise');
const cors = require('cors');
const fs = require('fs');
const Json2csvParser = require('json2csv').Parser;
const fields = ['title', 'imgSrc', 'sellerName', 'rating', 'price'];
const json2csvParser = new Json2csvParser({ fields });
const app = express();
app.use(cors({
  'allowedHeaders': ['Content-Type'],
  'origin': '*',
  'preflightContinue': false
}));


app.route('/api/downloadCsv')
 .get((req, res) => {

 });

app.route('/api/scrap-data')
 .get((req, res) => {
    const searchKey = req.query.searchKey;
    const url = "https://www.etsy.com/search?q=" + encodeURIComponent(searchKey);

    rp(url)
        .then(function(html){
          const data = [];
          let mainSelector = 'ul#reorderable-listing-results li';
          for (let i = 0; i < 20; i++) {
              let imgSrc = $(mainSelector + ' img', html)[i].attribs.src;
              let name = $(mainSelector + ' h2', html)[i].children[0].data.trim();
              let sellerSpan = $(mainSelector + ' .v2-listing-card__shop > span:first-child', html)[i];
              let sellerName = sellerSpan.children[0].data.trim();
              let rating = $(mainSelector + ' input[name=rating]', html)[i].attribs.value;
              let price = $(mainSelector + ' .currency-value', html)[i].children[0].data.trim();
              data.push({
                title: name,
                imgSrc: imgSrc,
                sellerName: sellerName,
                rating: rating,
                price: price
              });


          }

          fs.writeFile('./backend/temp/data.csv', json2csvParser.parse(data), function (err) {
            if (err) return console.log(err);
            console.log('Wrote data.csv to temp/data.csv');
          });
          res.status(200).json(data);
        })
        .catch(function(err){
            res.send(err);
        });
});

module.exports = app;
