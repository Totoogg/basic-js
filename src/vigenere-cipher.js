const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  constructor(reverse = true) {
    this.reverse = reverse
    this.alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split('')
  }
  encrypt(message, key) {
    if (arguments.length < 2 || Array.from(arguments).includes(undefined)) {
      throw new Error('Incorrect arguments!')
    }
    let arrMes = message.toUpperCase().split('')
    let arrMesLetters = arrMes.filter(x => this.alphabet.includes(x))
    let arrKey = key.repeat(Math.ceil(arrMesLetters.length / key.length)).toUpperCase().split('')
    let arrCrypt = []
    let res = []
    arrMesLetters.forEach((element, index) => {
      let codEl = element.codePointAt(0)
      let codKey = arrKey[index].codePointAt(0)
      let crypt = codEl + codKey - 65
      arrCrypt.push(String.fromCodePoint(crypt > 90 ? crypt - 26 : crypt))
    });
    arrMesLetters.reverse()
    arrCrypt.reverse()
    arrMes.forEach(x => {
      if(this.alphabet.includes(x)) {
        res.push(arrCrypt.pop())
      } else (
        res.push(x)
      )
    })
    return this.reverse ? res.join('') : res.reverse().join('')
  }
  decrypt(encryptedMessage, key) {
    if (arguments.length < 2 || Array.from(arguments).includes(undefined)) {
      throw new Error('Incorrect arguments!')
    }
    let arrMes = encryptedMessage.toUpperCase().split('')
    let arrMesLetters = arrMes.filter(x => this.alphabet.includes(x))
    let arrKey = key.repeat(Math.ceil(arrMesLetters.length / key.length)).toUpperCase().split('')
    let arrCrypt = []
    let res = []
    arrMesLetters.forEach((element, index) => {
      let codEl = element.codePointAt(0)
      let codKey = arrKey[index].codePointAt(0)
      let crypt = codEl - codKey + 65
      arrCrypt.push(String.fromCodePoint(crypt < 65 ? crypt + 26 : crypt))
    });
    arrMesLetters.reverse()
    arrCrypt.reverse()
    arrMes.forEach(x => {
      if(this.alphabet.includes(x)) {
        res.push(arrCrypt.pop())
      } else (
        res.push(x)
      )
    })
    return this.reverse ? res.join('') : res.reverse().join('')
  }
}

module.exports = {
  VigenereCipheringMachine
};
