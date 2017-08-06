const express = require('express')  ;
const bodyParser = require('body-parser');
const { createBlockchain } = require('./create-blockchain.js');
const { proofOfWork } = require('./proof-of-work.js');
const { createBlock } = require('./create-block.js');

const app = express();
const port = 3000;

app.use(bodyParser.json());

let transactions = [];
let blockchain = createBlockchain();

app.get('/', (req, res) => {  
  res.send('post transactions to /transaction');
});

app.get('/blocks', (req, res) => {
  const blocks = blockchain.map(b => ({
    data: b.data,
    hash: b.getHash(),
    index: b.index,
    timestamp: b.timestamp,
  }));
  res.send(blocks);
});

app.get('/mine', (req, res) => {
  const lastBlock = blockchain[blockchain.length - 1];
  const lastProof = lastBlock.data.proof_of_work;
  const proof_of_work = proofOfWork(lastProof);
  const to = "93j4ivnqiopvh43-random-public-key-b-qjrgvnoeirbnferinfo";

  transactions.push({"from":"network", to, "amount":1});

  const data = {
    proof_of_work,
    transactions
  };
  const newBlock = createBlock({
    data,
    index: lastBlock.index + 1,
    previous_hash: lastBlock.getHash(),
    timestamp: Date.now(),
  });
  blockchain.push(newBlock);
  res.send('success!' + JSON.stringify(newBlock));
});

app.post('/transaction', (req, res) => {
  transactions.push(req.body);
  console.log('transaction received:\n' + JSON.stringify(req.body));
  console.log('total transactions: '  + transactions.length);
  res.send('received transaction!');
});

app.listen(port, (err) => {  
  if (err)
    return console.log('something bad happened', err);
  console.log(`server is listening on ${port}`);
});
