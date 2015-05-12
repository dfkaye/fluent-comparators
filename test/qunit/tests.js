QUnit.test( "hello test", function( assert ) {
  assert.ok( 1 == "1", "Passed!" );
});


var asserts = [
  
  (typeof ({}).eq).eq('undefined'),
  (typeof null).eq('object'),
  (typeof undefined).eq('undefined'),


  (2).eq(2), // true
  !(NaN).eq(NaN), // true

  ('text').eq('text'), // true
  !('text').eq('asdf'), // true
  
  (false).eq(false), // true
  (true).eq(true), // true
  !(false).eq(true), // true

  (2.0).gt(1.999999999999999), // true
  !(1.999999999999999).gt(2.0), // true

  ('texta').gt('text'), // true
  !('text').gt('text'), // true

  !(false).gt(true), // true
  (true).gt(false), // true

  (-2).gte(-3), // true
  !(-3).gte(-2), // true

  ('texta').gte('text'), // true
  ('text').gte('text'), // true
  
  !(false).gte(true), // true
  (true).gte(false), // true
  
  !(NaN).gte(NaN), // true

  (2).lt(3), // true
  !(3).lt(2), // true
  
  ('text').lt('texty'), // true
  !('text').lt('text'), // true
  
  (false).lt(true), // true
  !(true).lt(false), // true

  (-1).lte(-0.5), // true
  !(-0.5).lte(-1), // true
  
  ('text').lte('texty'), // true
  !('text').lte('atext'), // true
  
  (false).lte(true), // true
  !(true).lte(false), // true

  !(NaN).lte(NaN), // true

  // null, undefined & empty strings
  
  (-1).lt(null), // true
  (0).lte(null), // true
  !('null').eq(null), // true
  !('').eq(null), // true
  
  !(0).eq(undefined), // true
  !(false).eq(undefined), // true
  !('undefined').eq(undefined), // true
  !('').eq(undefined), // true
  
  ('').eq(''), // true (fixed by this.valueOf() in eq)
  
  !('13').eq(13), // true
  ('13').eq((13).toString()) // true
];

console.log(asserts.join('').indexOf(false) == -1);

// verify that object properties inherit these methods

var test = {
  number: 1, boolean: true, string: 'string',
  null: null, undefined: undefined, '' : ''
};

var props = [
  test.number.eq(1), // true
  test.boolean.eq(true), // true
  test.string.eq('string'), // true
  test.string.eq(String('string')), // true
  
  !test.number.eq('1'), // true
  !test.boolean.eq('true'), // true
  !test.string.eq(new String('string')), // true
  test[''].eq('') // true
];

console.log(props.join('').indexOf(false) == -1);

try { test.null.eq(null) } catch(error) { console.log(error); }
try { test.undefined.eq(undefined) } catch(error) { console.log(error); }

