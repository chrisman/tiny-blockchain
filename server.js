const express = require('express')  ;
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(bodyParser.json());

let transactions = [];

app.get('/', (req, res) => {  
  res.send('post transactions to /transaction')
});

app.post('/transaction', (req, res) => {
  transactions.push(req.body);
  console.log('transaction received:\n' + JSON.stringify(req.body));
  console.log('total transactions: '  + transactions.length);
  res.send('received transaction!');
});

app.listen(port, (err) => {  
  if (err) {
    return console.log('something bad happened', err)
  }

  console.log(`server is listening on ${port}`)
});
