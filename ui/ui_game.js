function UI_Game() {
	this.G = new Game();
}

UI_Game.prototype.newGame = function(args) {
	var uG = args.uG = this;
	$.extend(uG, args);
	
	// create game
	uG.G.newGame(args)
	console.dir(uG.G);
	
}

UI_Game.prototype.render = function(galaxyNumber) {
	var uG = this;
	
	// get galaxy
	var X = uG.G.U.galaxies[galaxyNumber];
	
	// set page width
	var tablePixels = (X.galaxySize * 33) + 1;
	$('body').css('width', tablePixels + 32);
	
	// get div
	uG.$xDiv = $('#X_Div');
	uG.$xDiv.empty();
	
	// add table
	uG.$xTable = $('<table/>', {
		id: 'X_Table',
		cellpadding: "0",
		cellspacing: "0"
	});
	uG.$xTable.css('width', tablePixels);
	uG.$xTable.css('height', tablePixels);
	uG.$xTable.appendTo(uG.$xDiv);
		
	// populate galaxy
	for (var r = 0, rMax = X.galaxySize; r < rMax; r++) {
		
		// append row
		var $row = $('<row/>', {
			id: 'X_Row_' + r
		}).appendTo(uG.$xTable);
		
		// append cells
		for (var c = 0, cMax = X.galaxySize; c < cMax; c++) {
			
			// get class
			var cssClass = '';
			var SS = X.M[r][c];
			if (SS) {
				cssClass = SS.S.type.color + "_" + SS.S.type.size;
			}
			
			// append cell
			var $td = $('<td/>', {
				id: 'X_Cell_' + r + '_' + c,
				"class" : cssClass
			}).appendTo($row);
			
			// populate cell
			$td.html(X.M[r][c] ? '*' : '&nbsp;');			
			
		}
	
	}
	
	
}