var chalk = require('chalk');
const mouse = require('./mouse')


function cat(name){
	this.name = name;
	this.stomach = []
}

cat.prototype.sleep = function(){
	console.log('Zzzz...')
}

cat.prototype.eat = function(animal){
	if(animal instanceof mouse){
		return this.stomach.push(animal)
	}else {
		throw new Error('food  is not mouse ')
	}
}

module.exports = cat;