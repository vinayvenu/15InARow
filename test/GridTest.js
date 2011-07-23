module('Grid');

test('values()', function() {
	var length = 4;
	var grid = new Grid(length);
	equal(grid.values.length, length, 'Should get current state');
});
