'use strict'
const firstRow = "мама мыла раму";
const secondRow = "собака друг человека";
function getRow(firstRow, secondRow) {
	let string1 = 0;
	let string2 = 0;
	for (let i = 0; i < firstRow.length; i++) {
		if (firstRow[i] == 'а') {
			string1++;
		};
	};
	for (let i = 0; i < secondRow.length; i++) {
		if (secondRow[i] == 'а') {
			string2++;
		};
	};
	if (string1 > string2) {
		console.log(`Кол. букв а равна ${string1}`)
		return firstRow;
	} else if (string1 < string2) {
		console.log(`Кол. букв а равна ${string2}`)
		return secondRow;
	};
};
console.log(getRow(firstRow, secondRow)); 
