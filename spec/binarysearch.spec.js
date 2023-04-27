const binarySearch = require("../index");

test("Функция должна возвращать индекс элемента", () => {
	let n = "G";
	let arr = ["A", "B", "C", "D", "E", "F", "G", "H"];
	let start = 0;
	let end = arr.length;
	expect(binarySearch(n, arr, start, end)).toEqual(6);
	expect(binarySearch(n, arr, start, end)).toBe(6);
});

test("Функция должна быть определена", () => {
	let n = "G";
	let arr = ["A", "B", "C", "D", "E", "F", "G", "H"];
	let start = 0;
	let end = arr.length;
	expect(binarySearch(n, arr, start, end)).toBeDefined();
});

test("Функция должна возвращать -1, если элемента не существует в данном массиве", () => {
	let n = "K";
	let arr = ["A", "B", "C", "D", "E", "F", "G", "H"];
	let start = 0;
	let end = arr.length;
	expect(binarySearch(n, arr, start, end)).toEqual(-1);
	expect(binarySearch(n, arr, start, end)).toBe(-1);
});
