function checkAvg(arr, num) {
	let avg = 0;
	if (typeof (num) !== 'number') {
		return "second parameter should be a number"
	}
	for (i = 0; i < arr.length; i++) {
		for (j = i; j < arr.length; j++) {
			avg = (arr[i] + arr[j]) / 2
			if (avg === num) {
				return true
			}
		}
	}
	return false
}

console.log(checkAvg([1, 2, 3], "dua"))
console.log(checkAvg([-1, 0, , 3, 4, 5, 6], 4.1))
console.log(checkAvg([1, 2, 3], 2.5))
console.log(checkAvg([1, 3, 3, 5, 6, 7, 10, 12, 19], 8))
console.log(checkAvg([2, 4, 5, 7, 12, 23], 16))
