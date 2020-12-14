console.log('Starting...')
const fs = require('fs')
let a = 'a'
while (a) {
    let code = '';
    let dict = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    for(var i = 0; i < 16; i++){
        code = code + dict.charAt(Math.floor(Math.random() * dict.length));

}
let toSave = `https://discord.gift/${code} \n`
console.log('[CODE] https://discord.gift/' + code + "\n");
code += '\n'
fs.appendFileSync('./codes.txt', toSave);

}