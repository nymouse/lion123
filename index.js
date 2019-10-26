
function lion(){
	this.stomach = []
};

lion.prototype.sayhi = function(){
	console.log('hello world, i am a lion king ')
}

module.exports = lion;