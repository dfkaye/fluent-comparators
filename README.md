# fluent-comparators
fluent javascript dsl comparators (eq, gt, lt, gte, lte) for numbers, strings and booleans ~ based on idea at https://gist.github.com/dfkaye/ca8d518aaab092df4681

like this:  `path.to.value.eq(someValue) // true or false, depending`

## qunit test suite on rawgit
https://rawgit.com/dfkaye/fluent-comparators/master/test/qunit/browser.html

## TODO 10-May-2015:
+ add `not` or `neq` 
+ add callback support:
        
        value.eq(other, function capture(result) {
            console.log(result);
            return result; // or return this for chaining rather than if-ing...
        });
+ travis
+ testem
+ npm init test and pub
      
