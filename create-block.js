const sha256 = require('js-sha256');

/**
 * Block factory.
 */
const createBlock = ({
  data = {
    proof_of_work: 0,
    transactions: []
  },
  index = 0,
  previous_hash = '',
  proof_of_work = 0,
  timestamp = Date.now(),
} = {}) => ({
  data,
  index,
  previous_hash,
  timestamp,
  getHash () {
    let sha = sha256.create();
    sha.update(`${this.data}${this.index}${this.timestamp}${this.previous_hash}`);
    return sha.hex();
  },
});

module.exports = {
  createBlock
};
