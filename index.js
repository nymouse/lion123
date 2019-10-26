
const cat = require('./cat');
const mouse = require('./mouse');

function lion(){
	this.stomach = []
};

lion.prototype.sayhi = function(){
	console.log('hello world, i am a lion king ')
}

var tom = new cat('tom');
var jerry = new mouse('rerry');
var pink = new lion;

try{
tom.eat(pink);
} catch(error){
	console.log('this animal not a mouse "waring run run"')
}
console.log(tom);

jerry.run();


module.exports = lion;