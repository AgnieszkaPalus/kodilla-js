// Zadanie 9.3
var text = 'Velociraptor is a genus of herbivorous ceratopsid dinosaur that first appeared during the late Maastrichtian stage of the late Cretaceous period.'
var dinosaur = 'triceratops';



var UpperCaseDinosaur = dinosaur.toUpperCase();
console.log(UpperCaseDinosaur);

var changeText = text.replace('Velociraptor', UpperCaseDinosaur);
console.log(changeText);

var textDinosaur = changeText.substr(0, text.length/2);
console.log(textDinosaur);



// Zadanie 9.2
var femaleNames = ['Asia', 'Kasia', 'Ola', 'Jola'];
var maleNames = ['Piotrek', 'Marek', 'Arek', 'Jarek'];

var allNames = femaleNames.concat(maleNames);
console.log(allNames);

var newName = 'Marian';

if (allNames.indexOf(newName) === -1) {
	var allNames = allNames.push(newName);
}


// Zadanie 9.1
function getTriangleArea(a, h) {
	
	if (a <= 0 || h <= 0) {
		return 'Nieprawidłowe dane';
	} else {
		return a * h/2
	}
}



console.log(getTriangleArea(10,-6));

var triangle1Area = getTriangleArea(10,15);
var triangle2Area = getTriangleArea(3,7);
var triangle3Area = getTriangleArea(13,6);



// zadanie 8.6
var a = 3;
	b = 4;
	value = (a * a) + (2 * a * b) - (b * b);
	

if (value > 0) {
	console.log('Value is ' + value + ", and it's a positive value")
} 
else if (value < 0) {
	console.log('Value is ' + value + ", and it's a negative value")
}



if (value == 0) {
	alert('Value is a zero!')
}

/*
Zadanie 8.5

var a = 5;
	h = 7;
	triangleArea = a*h/2;

console.log('Triangle field with base a: ' + a + ' and height h: ' + h + ' is equal to: ' + triangleArea);
*/