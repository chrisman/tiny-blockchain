const { createBlock } = require('./create-block.js');
const { createGenesisBlock } = require('./create-genesis-block.js');

let blockchain = [createGenesisBlock()];
let previousBlock = blockchain[0];
const blockchainlength = 20;

const nextBlock = (lastBlock) => createBlock({
  index: lastBlock.index + 1,
  data: 'hello from block ' + (lastBlock.index + 1),
  previous_hash: lastBlock.getHash(),
});

for(let i = 0; i < blockchainlength; i++) {
  const blockToAdd = nextBlock(previousBlock);
  blockchain.push(blockToAdd);
  previousBlock = blockToAdd;

  console.log(`Added block ${blockToAdd.index}: ${blockToAdd.getHash()}`);
}
