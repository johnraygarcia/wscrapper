const express = require('express');
const $ = require('cheerio');
const rp = require('request-promise');
const cors = require('cors');
const fs = require('fs');

const app = express();
app.use(cors({
  'allowedHeaders': ['Content-Type'],
  'origin': '*',
  'methods': 'GET,HEAD,PATCH,POST',
  'preflightContinue': false
}));
app.route('/scrap-data')
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
            res.status(200).json(data);
        })
        .catch(function(err){
            res.send(err);
        });
});

module.exports = app;
