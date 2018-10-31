const Block = require('./block');
const fooBlock = Block.mineBlock(Block.genesis(), 'foo block');

console.log (fooBlock.toString());