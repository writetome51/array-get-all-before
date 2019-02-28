import { getLastIndexOf } from '@writetome51/array-get-indexes-intermediate';
import { _getAllBeforeIndex }
	from '@writetome51/array-get-all-before-after-index/_getAllBeforeIndex';

// None of these functions modify the passed array.
// They all return data copied from the array.
// 'value' cannot be object.

export function getAllBeforeLast(value: any, array): any[] {
	let index = getLastIndexOf(value, array);
	return _getAllBeforeIndex(index, array);
}
