
QUnit.module('eq');

QUnit.test( "number.eq(number)", function( assert ) {
  assert.ok( (2).eq(2), "(2).eq(2)!" );
  assert.ok( !(NaN).eq(NaN), "!(NaN).eq(NaN)!" );
});

QUnit.test( "string.eq(string)", function( assert ) {
  assert.ok( ('text').eq('text'), "('text').eq('text')!" );
  assert.ok( !('text').eq('asdf'), "!('text').eq('asdf')!" );
});

QUnit.test( "boolean.eq(boolean)", function( assert ) {
  assert.ok( (false).eq(false), "(false).eq(false)!" );
  assert.ok( (true).eq(true), "(true).eq(true)!" );
  assert.ok( !(false).eq(true), "!(false).eq(true)!" );
});

QUnit.test( "x.eq(null || |undefined)", function( assert ) {
  assert.ok( (typeof {}.eq).eq('undefined'), "object.eq!" );
  assert.ok( (typeof null).eq('object'), "(typeof null).eq('object')!" );
  assert.ok( (typeof undefined).eq('undefined'), "(typeof undefined).eq('undefined')!" );
});


QUnit.module('gt');

QUnit.test( "number.gt(number)", function( assert ) {
  assert.ok( (2.0).gt(1.999999999999999), "(2.0).gt(1.999999999999999)" );
  assert.ok( !(1.999999999999999).gt(2.0), "!(1.999999999999999).gt(2.0)!" );
});

QUnit.test( "string.gt(string)", function( assert ) {
  assert.ok( ('texta').gt('text'), "('texta').gt('text')!" );
  assert.ok( !('text').gt('text'), "!('text').gt('text')!" );
});
  
QUnit.test( "boolean.gt(boolean)", function( assert ) {
	assert.ok( !(false).gt(true), "!(false).gt(true)!" );
	assert.ok( (true).gt(false), "(true).gt(false)!" );
});


QUnit.module('gte');

QUnit.test( "number.gte(number)", function( assert ) {
	assert.ok( (-2).gte(-3), "(-2).gte(-3)!" );
	assert.ok( !(-3).gte(-2), "!(-3).gte(-2)!" );
	assert.ok( !(NaN).gte(NaN), "!(NaN).gte(NaN)!");
});

QUnit.test( "string.gte(string)", function( assert ) {
	assert.ok( ('texta').gte('text'), "('texta').gte('text')!" );
	assert.ok( ('text').gte('text'), "('text').gte('text')!" );
});

QUnit.test( "boolean.gte(boolean)", function( assert ) {
	assert.ok( !(false).gte(true), "!(false).gte(true)!" );
	assert.ok( (true).gte(false), "(true).gte(false)!" );
});

QUnit.module('lt');

QUnit.test( "number.lt(number)", function( assert ) {
	assert.ok( (2).lt(3), "(2).lt(3)!" );
	assert.ok( !(3).lt(2), "!(3).lt(2)!" );
});

QUnit.test( "string.lt(string)", function( assert ) {
	
	assert.ok( ('text').lt('texty'), "('text').lt('texty')!" );
	assert.ok( !('text').lt('text'), "!('text').lt('text')!" );
});

QUnit.test( "boolean.lt(boolean)", function( assert ) {
	assert.ok( (false).lt(true), "(false).lt(true)!" );
	assert.ok( !(true).lt(false), "!(true).lt(false)!" );
});


QUnit.module('lte');

QUnit.test( "number.lte(number)", function( assert ) {
	assert.ok( (-1).lte(-0.5), "(-1).lte(-0.5)!" );
	assert.ok( !(-0.5).lte(-1), "!(-0.5).lte(-1)!" );
	assert.ok( !(NaN).lte(NaN), "!(NaN).lte(NaN)!");
});

QUnit.test( "string.lte(string)", function( assert ) {
	assert.ok( ('text').lte('texty'), "('text').lte('texty')!" );
	assert.ok( !('text').lte('atext'), "!('text').lte('atext')!" );
});

QUnit.test( "boolean.lte(boolean)", function( assert ) {
	assert.ok( (false).lte(true), "(false).lte(true)!" );
	assert.ok( !(true).lte(false), "!(true).lte(false)!" );
});


QUnit.module('neq');

QUnit.test( "number.neq(number)", function( assert ) {
	assert.ok( (-1).neq(1), "(-1).neq(1)!" );
	//assert.ok( !(-0.5).lte(-1), "!(-0.5).lte(-1)!" );
	assert.ok( (NaN).neq(NaN), "(NaN).neq(NaN)!");
});

QUnit.test( "string.neq(string)", function( assert ) {
	assert.ok( ('text').neq('texty'), "('text').neq('texty')!" );
	assert.ok( !('text').neq('text'), "!('text').neq('text')!" );
});

QUnit.test( "boolean.neq(boolean)", function( assert ) {
	assert.ok( (false).neq(true), "(false).neq(true)!" );
	assert.ok( !(true).neq(true), "assert.ok( !(true).neq(true)!" );
});


QUnit.module('mod');

QUnit.test( "number.mod(number)", function( assert ) {
	assert.ok( (12).mod(4).eq(0), "(12).mod(4).eq(0)!" );
	assert.ok( (13).mod(4).eq(1), "(13).mod(4).eq(1)!" );
});
QUnit.test( "boolean.mod(boolean)", function( assert ) {
	assert.ok( (true).mod(true).eq(0), "(true).mod(true).eq(0)!");
	assert.ok( (true).mod(false).toString().eq('NaN'), "(true).mod(false).toString().eq('NaN')!");
});
QUnit.test( "string.mod(*)", function( assert ) {
	assert.ok( ('13').mod(4).eq(1), "('13').mod(4).eq(1)!");
	assert.ok( ('13').mod('4').eq(1), "('13').mod('4').eq(1)!");
	assert.ok( ('string').mod('string').toString().eq('NaN'), "('string').mod('string').toString().eq('NaN')!");	
});


QUnit.module('potpourri');

QUnit.test( "null, undefined & empty strings", function( assert ) {

	assert.ok( (-1).lt(null), "(-1).lt(null)!" );
	assert.ok( (0).lte(null), "(0).lte(null)!" );
	
	assert.ok( !('null').eq(null), "!('null').eq(null)!" );
	assert.ok( !('').eq(null), "!('').eq(null)!" );
	
	assert.ok( !(0).eq(undefined), "!(0).eq(undefined)!" );
	assert.ok( !(false).eq(undefined), "!(false).eq(undefined)!" );
	assert.ok( !('undefined').eq(undefined), "!('undefined').eq(undefined)!" );
	assert.ok( !('').eq(undefined), "!('').eq(undefined)!" );
	assert.ok( ('').eq(''), "('').eq('')!" ); // fixed by this.valueOf() in eq()
	
	assert.ok( !('13').eq(13), "!('13').eq(13)!" );
	assert.ok( ('13').eq((13).toString()), "('13').eq((13).toString())!" );
});

QUnit.test( "object properties", function( assert ) {

	var test = {
		number: 1, boolean: true, string: 'string', '' : ''
	};

	assert.ok( test.number.eq(1), "test.number.eq(1)!" );
	assert.ok( test.boolean.eq(true), "test.boolean.eq(true)!" );
	assert.ok( test.string.eq('string'), "test.string.eq('string')!" );
	assert.ok( test.string.eq(String('string')), "test.string.eq(String('string'))!" );
	
	// neq
	assert.ok( test.number.neq('1'), "test.number.neq('1')!" );
	assert.ok( test.boolean.neq('true'), "test.boolean.neq('true')!" );
	assert.ok( test.string.neq(new String('string')), "test.string.neq(new String('string'))!" );
	
	// empty keyname
	assert.ok( test[''].eq(''), "test[''].eq('')!" );
});

QUnit.test( "null property access should throw", function( assert ) {

	var test = {
		null: null, undefined: undefined
	};
	
  assert.throws(function () {
      test.null.eq(null)
    }, 'should throw: test.null.eq(null)');
  
  assert.throws(function () {
      test.undefined.eq(undefined)
    }, 'should throw: test.null.eq(null)');
});
