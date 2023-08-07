const numberToRoman = require('../src/roman')
describe('Roman Numeral converter', () => {
    test('input 1 should return "I"', () => {
        expect(numberToRoman(1)).toEqual('I')
    });

   test('input 4 should return IV', () => {
        expect(numberToRoman(4)).toEqual('IV')
    });

    test('input 5 should return V', () => {
        expect(numberToRoman(5)).toEqual('V')
   });

   test('input 9 should return IX', () => {
    expect(numberToRoman(9)).toEqual('IX')
   });

   test('input 64 should return LXIV', () => {
    expect(numberToRoman(64)).toEqual('LXIV')
   });

   test('input 789 should return DCCLXXXIX', () => {
    expect(numberToRoman(789)).toEqual('DCCLXXXIX')
   });
});

// input 5 => 'V'
//input 9 => 'IX'
//40 => 'XL'