import { getAllBeforeLast } from './getAllBeforeLast';


let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 21, 31, 41, 51, 61, 71, 81, 80, 90, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];


// Test 1
let result = getAllBeforeLast(1, arr);
if (result.length === 20 && result[0] === 1 && result[9] === 10 && result[19] === 90)
	console.log('test 1 passed');
else console.log('test 1 failed');


// Test 2
if (arr.length === 30 && arr[0] === 1 && arr[9] === 10 && arr[29] === 10 )
	console.log('test 2 passed');
else console.log('test 2 failed');


// Test 3
result = getAllBeforeLast(5, arr);
if (result.length === 24 && result[0] === 1 && result[13] === 41 && result[23] === 4)
	console.log('test 3 passed');
else console.log('test 3 failed');


// Test 4: if value isn't in array, should trigger error:
let errorTriggered = false;
try {
	getAllBeforeLast('', arr);
}
catch (e) {
	errorTriggered = true;
}
if (errorTriggered) console.log('test 4 passed');
else console.log('test 4 failed');


// Test 5: if second argument isn't array, should trigger error:
errorTriggered = false;
try {
	getAllBeforeLast('', 'hello everybody!!!');
}
catch (e) {
	errorTriggered = true;
}
if (errorTriggered) console.log('test 5 passed');
else console.log('test 5 failed');


// Test 7: if first arg is not primitive or array, should trigger error:
errorTriggered = false;
try {
	getAllBeforeLast({}, arr);
}
catch (e) {
	errorTriggered = true;
}
if (errorTriggered) console.log('test 6 passed');
else console.log('test 6 failed');
