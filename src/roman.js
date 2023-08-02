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
    const romanNumerals = {
        1: 'I',
        4: 'IV',

    };
       
    let result = '';
    for(let value in romanNumerals){
        while (num >= value) {
            result += romanNumerals[value];
            num -= value;
        }
    }
    
    return result;
};

module.exports = numberToRoman