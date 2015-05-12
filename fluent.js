// 9-May-2015
// fluent comparators
// using Object.prototype.<compare>() methods:
//
//      path.to.value.eq(someValue) // true or false, depending

// 12-May-2015:
// + changed from Object.prototype, to Number, String and Boolean prototypes

// TODO 10-May-2015:
// + real test cases w/ test runner;
// + add `not` ??
// + add callback support:
//
//      value.eq(other, function capture(result) {
//          console.log(result);
//          return result; // or return this for chaining rather than if-ing...
//      });

(function() {
  
  var comp = {
        'eq': function eq(n) { return this.valueOf() === n; },
        'gt': function gt(n) { return this > n; },
        'gte': function gte(n) { return this >= n; },
        'lt': function lt(n) { return this < n; },
        'lte': function lte(n) { return this <= n; },
      },
      b = Boolean.prototype,
      n = Number.prototype,
      s = String.prototype,
      f;
  
  for (var k in comp) {
    f = comp[k];
    k in b || (b[k] = f);
    k in n || (n[k] = f);
    k in s || (s[k] = f);
  }
  
}());
