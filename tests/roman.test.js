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
});

// input 5 => 'V'
//input 9 => 'IX'
//40 => 'XL'