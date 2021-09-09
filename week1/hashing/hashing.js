"use strict";

var crypto = require("crypto");

// The Power of a Smile
// by Tupac Shakur
var poem = [
	"The power of a gun can kill",
	"and the power of fire can burn",
	"the power of wind can chill",
	"and the power of a mind can learn",
	"the power of anger can rage",
	"inside until it tears u apart",
	"but the power of a smile",
	"especially yours can heal a frozen heart",
];

var Blockchain = {
	blocks: [],
};

var index = 0;

// Genesis block
Blockchain.blocks.push({
	index: index,
	hash: "000000",
	data: "",
	timestamp: Date.now(),
});

for (let line of poem) {
	Blockchain.blocks.push(createBlock(line));
}
console.log("Blockchain created:");
console.log(Blockchain.blocks);
console.log(`Blockchain is valid: ${verifyChain(Blockchain)}`);

function createBlock(line) {
	let block = {};

	block.index = ++index;
	block.prevHash = Blockchain.blocks[index-1].hash;
	block.data = line;
	block.timestamp = Date.now();
	block.hash = blockHash(block);

	return block;
}

function blockHash(bl) {
	return crypto.createHash("sha256").update(bl.index + bl.prevHash + bl.data +bl.timestamp).digest("hex");
}

function verifyBlock(bl) {
	// Check if genesis block
	if (bl.index == 0 && bl.hash === "000000") return true;
	if (bl.index >= 0 && bl.prevHash.length > 0 && bl.data.length > 0 && bl.hash === blockHash(bl)) return true;

	return false;
}

function verifyChain(chain) {
	for (let block of Blockchain.blocks) {
		if (!verifyBlock(block)) {
			console.log("Block verification failed: " + block.data);
			return false;		
		}
	}
	for (let i = Blockchain.blocks.length - 1; i > 0; i--) {
		if(Blockchain.blocks[i].prevHash != Blockchain.blocks[i - 1].hash) return false;
	}
	return true;
}