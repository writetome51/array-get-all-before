# getAllBeforeFirst(value, array): any[]

Returns everything before first instance of `value` in `array`.  Does not modify `array`.

# getAllBeforeLast(value, array): any[]

Returns everything before last instance of `value` in `array`.  Does not modify `array`.

For both functions, `value` cannot be an object.  Arrays are OK.


## Examples
```

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