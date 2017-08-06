const sha256 = require('js-sha256');

/**
 * Block factory.
 */
const createBlock = ({
  data = '',
  index = 0,
  previous_hash = '',
  timestamp = Date.now(),
} = {}) => ({
  data,
  index,
  previous_hash,
  timestamp,
  getHash () {
    let sha = sha256.create();
    sha.update(`${this.data}${this.index}${this.timestamp}${this.previous_hash}`)
    return sha.hex();
  },
});

module.exports = {
  createBlock
}
