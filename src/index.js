const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let resultStr = '';
    let arr = expr.match(/.{1,10}/g);
    for (let i = 0; i < arr.length; i += 1){
        if (arr[i] === "**********"){
            resultStr += ' ';
        } else{
            arr[i] = Number(arr[i]).toString();
            arr[i] = arr[i].replace(/(10)/g, '.');
            arr[i] = arr[i].replace(/(11)/g, '-');
            resultStr += MORSE_TABLE[arr[i]]; 
        }
    }
    return resultStr;
}

module.exports = {
    decode
}