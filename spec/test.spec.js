
// alphabet in binary //
////////////////////////

// A	01000001
// B	01000010
// C	01000011
// D	01000100
// E	01000101
// F	01000110
// G	01000111
// H	01001000
// I	01001001
// J	01001010
// K	01001011
// L	01001100
// M	01001101
// N	01001110
// O	01001111
// P	01010000
// Q	01010001
// R	01010010
// S	01010011
// T	01010100
// U	01010101
// V	01010110
// W	01010111
// X	01011000
// Y	01011001
// Z	01011010
//
// a	01100001
// b	01100010
// c	01100011
// d	01100100
// e	01100101
// f	01100110
// g	01100111
// h	01101000
// i	01101001
// j	01101010
// k	01101011
// l	01101100
// m	01101101
// n	01101110
// o	01101111
// p	01110000
// q	01110001
// r	01110010
// s	01110011
// t	01110100
// u	01110101
// v	01110110
// w	01110111
// x	01111000
// y	01111001
// z	01111010
//\\\\\\\\\\\\\\\\\\\\\\\
//\\\\\\\\\\\\\\\\\\\\\\\

var Convert = require('../binary-conversion.js');

describe('conversion', function() {

  it('should Convert a single letter to binary', function() {
    expect(Convert('A', 'letters')).toEqual('01000001');
    expect(Convert('H', 'letters')).toEqual('01001000');
    expect(Convert('Q', 'letters')).toEqual('01010001');
    expect(Convert('Z', 'letters')).toEqual('01011010');
  });

  it('should Convert a single digit number to binary', function() {
    expect(Convert('1', 'numbers')).toEqual('1');
    expect(Convert('5', 'numbers')).toEqual('101');
    expect(Convert('9', 'numbers')).toEqual('1001');
    expect(Convert('4', 'numbers')).toEqual('100');
    expect(Convert('8', 'numbers')).toEqual('1000');
    expect(Convert('0', 'numbers')).toEqual('0');
  });

  xit('should Convert multiple letters with correct spacing', function() {
    expect(Convert('ABC', 'letters')).toEqual('01000001 01000010 01000011');
    expect(Convert('ITSEZ', 'letters')).toEqual('01001001 01010100 01010011 01000101 01011010');
    expect(Convert('ASOTE', 'letters')).toEqual('01000001 01010011 01001111 01010100 01000101');
  });

  xit('should Convert multiple/multi-digit numbers with correct spacing', function() {
    expect(Convert('128', 'numbers')).toEqual('10000000');
    expect(Convert('123', 'numbers')).toEqual('1111001');
    expect(Convert('1, 4, 8', 'numbers')).toEqual('1 100 1000');
    expect(Convert('34782', 'numbers')).toEqual('1000011111011110');
  });

  xit('should convert lowercase and capital letters and numbers', function() {
    expect(Convert('aAbB')).toEqual('01100001 01000001 01100010 01000010');
    expect(Convert('Binary Code is 1337!')).toEqual('01000010 01101001 01101110 01100001 01110010 01111001 00100000 01000011 01101111 01100100 01100101 00100000 01101001 01110011 00100000 10100111001 00100001');
  });

});
