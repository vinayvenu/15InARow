Scrambler = function() {}	

Scrambler.prototype._randomize = function(list) {
	var tempBuffer;
	var randomLocation;
	var len = list.length;
	for(var i = 0; i < len; i++) {
		randomLocation = Math.floor (Math.random()*len);
		tempBuffer = list[i];
		list[i] = list[randomLocation];
		list[randomLocation] = tempBuffer;
	}
	return list;
};

Scrambler.prototype.scramble = function(len) {
	list = new Array();
	for (var i = 0; i < len; i++) {
		list[i] = i;
	}
	return this._randomize(list);
}