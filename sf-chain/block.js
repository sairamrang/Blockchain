const SHA256 = require('crypto-js/sha256');

class Block {
    constructor(timestamp, lastHash, hash, data){
        this.timestamp = timestamp;
        this.lastHash = lastHash;
        this.hash = hash;
        this.data = data;
    }

    toString(){
        return `
        Block -
        Timestamp   : ${this.timestamp}
        lastHash    : ${this.lastHash}
        hash        : ${this.hash}
        data        : ${this.data}
        `;
    }

    static hash(timestamp, lastHash, data) {
        return SHA256(`${timestamp}${lastHash}${data}`).toString();
    }


    static genesis(){
        const hash = Block.hash('', '', []);
        return new this ('','',hash,[]);
    }

    static mineBlock(lastBlock, data){
        let timeStamp  = Date.now();
        let lastHash = lastBlock.hash;
        const hash = Block.hash(timeStamp, lastHash, data);

        return new this (timeStamp, lastHash, hash, data);
    }
}

module.exports = Block;