function Universe(args) {
	var U = args.U = this;
	$.extend(U, args);
	
	// create initial galaxy
	U.galaxies = [];
	U.galaxies.push(new Galaxy(args));
	
}