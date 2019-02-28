import { getLastIndexOf } from '@writetome51/array-get-indexes';
import { _getAllBeforeIndex } from '@writetome51/array-get-all-before-after-index';


// Returns everything before last instance of `value` in `array`.  Does not modify `array`.
// `value` cannot be an object. Arrays are OK.

export function getAllBeforeLast(value: any, array): any[] {
	let index = getLastIndexOf(value, array);
	return _getAllBeforeIndex(index, array);
}
