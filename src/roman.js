/* 
Given an integer input, produce output in Roman Numeral format.

I => 1
IV = 4
V => 5
IX => 9
X => 10
XL => 40
L => 50
XC => 90
C => 100
D => 500
M => 1000

*/


function numberToRoman(num) {
    const romanNumerals = [ 
        'M', 'CM', 'D', 'CD',
        'C', 'XC', 'L', 'XL',
        'X', 'IX', 'V', 'IV',
        'I'
    ];

    const lookupValues = [
        1000, 900, 500, 400,
        100,  90,  50,  40,
         10,   9,   5,   4,
          1
    ];

    let result = ''; // final Roman numeral representation.
    // initalization; condition; iteration
    for(let i = 0; num; i++){  //
   
    while(num >= lookupValues[i]){  // checks if (num) is greater than or equal to the current lookup value at index i
        num -= lookupValues[i];  // True => subtracts the lookup value from num & add to result string
        result += romanNumerals[i];
    }
    }
    return result;
    
};

module.exports = numberToRoman