# getAllBeforeFirst(value, array): any[]

Returns everything before first instance of `value` in `array`.  Does not modify `array`.

# getAllBeforeLast(value, array): any[]

Returns everything before last instance of `value` in `array`.  Does not modify `array`.


Examples:
```
let arr = [1,2,3,4,5,6,7,8,9,10];
let middle = getBetween(2, arr); // ignores first 2 and last 2 items.
// middle is now [3,4,5,6,7,8]

middle = getBetween(4, arr); // ignores first 4 and last 4 items.
// middle is now [5,6]
```

## Installation
`npm i  @writetome51/array-get-all-before`


## Loading
```
// if using TypeScript:
import {getAllBeforeFirst, getAllBeforeLast} from '@writetome51/array-get-all-before'
    
// if using ES5 JavaScript:
var getAllBeforeFirst = require('@writetome51/array-get-all-before').getAllBeforeFirst;
var getAllBeforeLast = require('@writetome51/array-get-all-before').getAllBeforeLast;
```