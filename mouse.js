
function mouse(name){
	this.name = name
}

mouse.prototype.run = function(){
	console.log('run fast...')
}

module.exports = mouse;