const f = require("./index");

const ARR_LENGTH = 100;

for (let i = 0; i < 100; i++) {
	let arr = Array(ARR_LENGTH)
		.fill(0)
		.map((_, i) => i + 1);
	let r = Math.floor(Math.random() * ARR_LENGTH);
	let spliced = arr.splice(r, 1)[0];

	test(`${arr} results should be ${spliced}`, () => {
		expect(f(arr, 0, arr.length - 1)).toBe(spliced);
	});
}
