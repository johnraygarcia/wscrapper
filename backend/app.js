const express = require('express');
const $ = require('cheerio');
const rp = require('request-promise');
const cors = require('cors');
const fs = require('fs');
const Json2csvParser = require('json2csv').Parser;
const fields = ['title', 'imgSrc', 'sellerName', 'rating', 'price', 'currency', 'listingId'];
const json2csvParser = new Json2csvParser({ fields });
const app = express();
const csvFileLoc = './backend/temp/data.csv';

app.use(cors({
  'allowedHeaders': ['Content-Type'],
  'origin': '*',
  'preflightContinue': false
}));

app.route('/api/download-csv')
 .get((req, res) => {

    res.setHeader('Content-disposition', 'attachment; filename=data.csv');
    res.set('Content-Type', 'text/csv');
    var filestream = fs.createReadStream(csvFileLoc);
    filestream.pipe(res);
 });

app.route('/api/scrap-data')
 .get((req, res) => {
    const searchKey = req.query.searchkey;
    let url = "https://www.etsy.com/search?q=" + encodeURIComponent(searchKey);
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
              let currency = $(mainSelector + ' .currency-symbol', html)[i].children[0].data.trim();
              let listingId = $(mainSelector + ' .v2-listing-card', html)[i].attribs['data-listing-id'];
              data.push({
                title: name,
                imgSrc: imgSrc,
                sellerName: sellerName,
                rating: rating,
                price: price,
                currency: currency,
                listingId: listingId
              });
          }

          fs.writeFile(csvFileLoc, json2csvParser.parse(data), function (err) {
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
