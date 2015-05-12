QUnit.test( "eq", function( assert ) {
  assert.ok( (2).eq(2), "(2).eq(2)!" );
  assert.ok( !(NaN).eq(NaN), "!(NaN).eq(NaN)!" );
  assert.ok( ('text').eq('text'), "('text').eq('text')!" );
  assert.ok( !('text').eq('asdf'), "!('text').eq('asdf')!" );
  assert.ok( (false).eq(false), "(false).eq(false)!" );
  assert.ok( (true).eq(true), "(true).eq(true)!" );
  assert.ok( (true).eq(true), "(true).eq(true)!" );
  assert.ok( !(false).eq(true), "!(false).eq(true)!" );
});
