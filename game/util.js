function randomIntFromInterval(min, max) {
    return Math.floor(Math.random()*(max - min + 1) + min);
}

function distance(r1, c1, r2, c2) {
	var rDiff = Math.pow(r2 - r1, 2);
	var cDiff = Math.pow(c2 - c1, 2);
	return Math.sqrt(rDiff + cDiff);
}