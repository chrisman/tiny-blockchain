# Tiny Blockchain

This is a tiny blockchain written in JavaScript based on [this series of articles][medium].

[medium]: https://medium.com/crypto-currently/lets-build-the-tiniest-blockchain-e70965a248b

## Using

1. `npm install` and `node server.js`

2. you can visit `localhost:3000/blocks` to see all the blocks in your blockchain.

3. you can visit `localhost:3000/mine` to mine for a coin.

4. You can post a transaction to `localhost:3000/transaction`. See `example.json` and `post-transaction.js` for an example.

## Concepts

Stuff I learned while writing this.

### blockchain

The blockchain itself is surprisingly simple. It is a chain (array) of blocks (objects). Little more than a linked list. Blocks contain arbitrary amounts and types of data. In this case, that data represents a single unit of cryptocurrency. A block also contains a sha256 has of 1) its index in the array/chain, 2) a timestamp of its creation, 3) its arbitrary data, and 4) the hash of the previous block in the chain. The block is secure from being altered--from having blocks inserted or removed, and the integrity of the chain grows the longer it becomes.

### proof of work

This is cryptocurrency specific. Not blockchain related.

Each block contains, in its `data` object, a _proof of work_ which is a numerical value used by the proof-of-work algorithm to allow users to create new blocks by "mining" them.

The algorithm is meant to be difficult (computationally) to solve but easy to verify. In this case, it is based on the "proof of work" value of the final block in the chain.

### consensus

The "public ledger" part of the blockchain requires it to be distributed and decentralized. This implementation includes  a list of nodes running instances of the server. Local instances can poll the nodes and get their copies of their chains. The longest chain becomes the sanctioned chain.

## Todo

* [ ] Verify checksums before adding to chain, or replacing current chain

* [ ] Make transactions actually do something
