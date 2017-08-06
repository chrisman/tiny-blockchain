const { createBlock } = require('./create-block');
const data = require('./example.json');

const createGenesisBlock = () => createBlock({
  data,
  index: 0,
  previous_hash: 0,
  proof_of_work: 23,
  timestamp: Date.now(),
});

module.exports = {
  createGenesisBlock
};
