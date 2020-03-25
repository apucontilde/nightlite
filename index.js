const generateZokratesFiles = require('./setup/generateZokratesFiles');
const merkleTree = require('./merkleTree');
const provider = require('./provider');
const vks = require('./vks');
const erc20rc = require('./erc20rc');
const erc20n = require('./erc20');
const erc721n = require('./erc721');
const erc721rc = require('./erc721rc');
const utils = require('./utils');
const elgamal = require('./elgamal');

// Do we want regulatory compliance?  It's not avaiable with MiMC yet
let erc20 = erc20n;
let erc721 = erc721n;
if (process.env.COMPLIANCE === 'true') {
  if (process.env.HASH_TYPE === 'mimc')
    throw new Error('Regulatory Compliance version does not yet support a MiMC hash');
  erc20 = erc20rc;
  erc721 = erc721rc;
}
module.exports = {
  generateZokratesFiles,
  merkleTree,
  provider,
  vks,
  erc20,
  erc721,
  utils,
  elgamal,
};
