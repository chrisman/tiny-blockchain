const validProof = lastProof => n => n % 23 === 0 && n % lastProof === 0;

const proofOfWork = lastProof => {
  const valid = validProof(lastProof);
  let proof = lastProof + 1;
  while (!valid(proof)) proof += 1;
  return proof;
};

module.exports = {
  proofOfWork
};
