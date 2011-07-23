var Scrambler = function() {
	var result;
	var currentValue = 0;

	var randomize = function() {
		var buffer;
		var randomLocation;
		var len = result.length;
		for(var i = 0; i < len; i++) {
			randomLocation = Math.floor (Math.random()*len);
			buffer = result[i];
			result[i] = result[randomLocation];
			result[randomLocation] = buffer; 
		}
	};
	
	return {
		scramble : function(len) {
			result = new Array();
			for (var i = 0; i < len; i++) {
				result[i] = i;
			};
			randomize();
			return result;
		}
	};
}();

var Grid = function() {
	var gridSize = 0;
	var grid;
	var scrambler;

	return {
		init : function (size) {
			gridSize = size;
			var scrambledList = Scrambler.scramble(size*size);
			grid = new Array(size);
			var count = 0;
			for (var row=0; row < size; row++) {
				grid[row] = new Array(size);
				for (var col = 0; col < size; col++ ){
					grid[row][col] = scrambledList[count]; 
					count++;
				};
			};
		},
		
		printIt : function() {
			console.log(grid);
		}
	}
}();

Grid.init(2);
Grid.printIt();
