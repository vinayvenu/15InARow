module('Scramble');

function assertLength(array, expectedLength) {
	return array.length === expectedLength;
}

function checkForDuplicates(array) {
	var result = array[0];
	var length = array.length;
	for (var i = 1; i < length; i++ ) {
		result ^= array[i];
	}
	return result === 0;
}

function checkForInclusion(array) {
	var length = array.length;
	var result = array[0];
	for (var i = 1; i < length; i++ ) {
		result += array[i];
	}
	return result === (length * (length -1)/2);
}

test('scramble(length of array)', function() {
	var length = 4;
	var result = new Scrambler().scramble(length);
	ok(assertLength(result, length), 'Length of array should be equal to length provided');
	ok(checkForInclusion(result), 'Array should contain only elements from 0 to ' + (length-1));
	ok(checkForDuplicates(result), 'Duplicates should not be present in the array');
});
