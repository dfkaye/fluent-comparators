# fluent-comparators
Not meant to be an expects-matcher library.  Adds fluent javascript dsl comparator methods (eq, neq, gt, lt, gte, lte) to numbers, strings and booleans.

Given:  

	path.to.value = 1; // (or true or 'hello');
	
Then these return `true`:

	path.to.value.eq(testValue = path.to.value); 
	path.to.value.neq(testValue = path.to.value + 1);
	path.to.value.gt(testValue = path.to.value);
	path.to.value.gte(testValue = path.to.value + 1);
	path.to.value.lt(testValue = path.to.value + 1);
	path.to.value.lte(testValue = path.to.value + 1);
	
Support for mod operator (%):

	12.mod(4).eq(0);
	13.mod(4).eq(1);
	'13'.mod(4).eq(1);
	13.mod('4').eq(1);
	'not a number'.mod('not a number').toString().eq('NaN');

## qunit test suite on rawgit
https://rawgit.com/dfkaye/fluent-comparators/master/test/qunit/browser.html

## TODO:
+ add math operators [16 June 2015] ~ plus(), minus(), times(), divBy()
+ add isNaN() [16 June 2015]
+ add callback support [ 10-May-2015]:
        
        value.eq(other, function capture(result) {
            console.log(result);
            return result; // or return this for chaining rather than if-ing...
        });
+ travis
+ testem
+ npm init test and pub
