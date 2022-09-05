function f(arr, start, end) {
	let i = Math.floor(start + (end - start) / 2);

	if (i === 0 && arr[i] === 2) {
		return 1;
	} else if (i === arr.length - 1 && arr[i] === i + 1) {
		return arr[i] + 1;
	} else if (arr[i] + 2 === arr[i + 1]) {
		return arr[i] + 1;
	}

	if (arr[i] === i + 2) {
		return f(arr, start, i - 1);
	} else {
		return f(arr, i + 1, end);
	}
}

module.exports = f;
