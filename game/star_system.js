function StarSystem(args) {
	var SS = args.SS = this;
	$.extend(SS, args);

	// create star
	SS.S = new Star(args);
	
}






