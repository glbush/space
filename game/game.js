function Game() {}

Game.prototype.newGame = function(args) {
	var G = args.G = this;
	$.extend(G, args);
	
	// create universe
	G.U = new Universe(args);
	
}