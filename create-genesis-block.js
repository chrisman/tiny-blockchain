const { createBlock } = require('./create-block');

const createGenesisBlock = () => createBlock({
  index: 0,
  data: 'Genesis Block',
  timestamp: Date.now(),
  previous_hash: 0,
});

module.exports = {
  createGenesisBlock
}
