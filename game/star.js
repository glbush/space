function StarForge() {
	this.distribution = [];
	for (var k in STAR_TYPES) {
		var t = STAR_TYPES[k];
		for (var i = 0; i < t.probability; i++) {
			this.distribution.push(t);
		}
	}
}

StarForge.prototype.create = function() {
	var	v = randomIntFromInterval(0, this.distribution.length - 1);
	return this.distribution[v];
}

STAR_FORGE = new StarForge();

function Star(args) {
	var S = args.S = this;
	$.extend(S, args);
	
	// determine star type
	S.type = STAR_FORGE.create();
	console.log(S.type);
	
}