var GALAXY_TYPES = ['irregular'];

function Galaxy(args) {
	var X = args.X = this;
	$.extend(X, args);
	
	// set size
	if (isNaN(X.galaxySize)) {
		X.galaxySize = randomIntFromInterval(10, 10);
	}
	if (X.galaxySize % 2) {
		X.galaxySize = X.galaxySize - 1;
	}
	
	// get center
	X.center = Math.ceil(X.galaxySize / 2);
	
	// create map
	X.M = new Array(X.galaxySize);
	for (var r = 0, rMax = X.galaxySize; r < rMax; r++) {
		var row = new Array(X.galaxySize);
		X.M[r] = row;
		
		// determine if there is a star system
		for (var c = 0, cMax = X.galaxySize; c < cMax; c++) {
			X.M[r][c] = X[X.galaxyType + "HasStar"](r, c);
		}
		
	}
	
}

Galaxy.prototype.irregularHasStar = function(r, c) {
	var G = this;
	var x = randomIntFromInterval(1, G.galaxyDensity);
	return x === G.galaxyDensity;
}

Galaxy.prototype.ellipticalHasStar = function(r, c) {
	// compute distance from center
	var dist = distance(r, c, X.galaxySize, X.galaxySize);
	X.M[r][c] = dist;
}
