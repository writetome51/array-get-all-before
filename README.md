# getAllBeforeFirst(value, array): any[]

Returns everything before first instance of `value` in `array`.  Does not modify `array`.

# getAllBeforeLast(value, array): any[]

Returns everything before last instance of `value` in `array`.  Does not modify `array`.

For both functions, `value` cannot be an object.  Arrays are OK.


## Examples
```
let arr = [1, 2, 3, 4, 5, 6, 1, 2, 3, 4, 5, 6];
getAllBeforeFirst(6, arr);
   // --> [1, 2, 3, 4, 5]

getAllBeforeLast(6, arr);
   // --> [1, 2, 3, 4, 5, 6, 1, 2, 3, 4, 5]
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