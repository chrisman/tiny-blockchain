const http = require('http');
const { peers } = require('./peers.js');

const findChains = (urls = peers) =>
  Promise.all(urls.map(url => new Promise((resolve, reject) => {
    http.get(`${url}/blocks`, res => {
      let body = '';
      res.on('data', function(chunk){
        body += chunk;
      });
      res.on('end', function(){
        const response = JSON.parse(body);
        resolve(response);
      });
    }).on('error', function(e){
      reject(e);
    });
  })));

const consensus = (blockchain = []) =>
  findChains(peers).then(chains =>
    [...chains, blockchain]
      .reduce(longest = (x, y) => x.length > y.length ? x : y));

module.exports = {
  consensus
};
