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
    // write your solution here
    const D = {
        "10": ".", 
        "11": "-",
        "00": "",
    }
    var res = []
    res = expr.split("**********");
    res = res.map(e => e.split(/(?=(?:\d{10})+$)/));
    res = res.map(e => e.map(d => d.split(/(?=(?:\d{2})+$)/)));
    res = res.map(e => e.map(d => d.map(f => D[f])));
    res = res.map(e => e.map(d => d.join("")));
    res = res.map(e => e.map(d => MORSE_TABLE[d]));
    res = res.map(e => e.join(""));
    res = res.join(" ");
    return res;

}

module.exports = {
    decode
}