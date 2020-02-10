function Mouse(name){
	this.name = name;
	this.dead = false;
}
Mouse.prototype.die = funciton() {
	this.dead = true;
}
module.exports = Mouse;