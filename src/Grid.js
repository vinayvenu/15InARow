Grid = function(size) {
	var that = this;
	var gridSize = size;
	var scrambler = new Scrambler();
	
	this.values = null;
	
	var _initialize = function(){		
		var scrambledList = new Scrambler().scramble(gridSize*gridSize);
		var count = 0;
		that.values = new Array();
		for (var row=0; row < gridSize; row++) {
			that.values[row] = new Array(gridSize);
			for (var col = 0; col < gridSize; col++ ){
				that.values[row][col] = scrambledList[count]; 
				count++;
			}
		}
	}();
}