const { createBlock } = require('./create-block.js');
const { createGenesisBlock } = require('./create-genesis-block.js');
const data = require('./example.json');

const nextBlock = (lastBlock) => createBlock({
  index: lastBlock.index + 1,
  data,
  previous_hash: lastBlock.getHash(),
});

const createBlockchain = (length = 20) => {
  let blockchain = [createGenesisBlock()];
  let previousBlock = blockchain[0];

  for(let i = 0; i < length; i++) {
    const blockToAdd = nextBlock(previousBlock);
    blockchain.push(blockToAdd);
    previousBlock = blockToAdd;
  }

  return blockchain;
};

module.exports = {
  createBlockchain
};
