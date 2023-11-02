import Module from "node:module"
const require = Module.createRequire(import.meta.url)
const prompt = require('prompt-sync')({ sigint: true })

export default class Question {

  constructor(questionText) {
    this.questionText = this.askQuestion()
    /* ersatt detta från original
    this.answer = prompt(questionText).toUpperCase() */
  }

  askQuestion() {
    let guessedLetter
    do {
      guessedLetter = prompt(this.questionText).trim().toUpperCase()
      if (!this.isOnlyLetters(guessedLetter)) {
        console.log("Please enter letters only.")
      }
      if (!this.isOnlyOneLetter(guessedLetter)) {
        print("Please enter only one letter.")
      }
    } while (!this.isOnlyLetters(guessedLetter) && !this.isOnlyOneLetter(guessedLetter))
    if (!this.usedLetters.includes(guessedLetter)) {
      print('You already tried this letter, you moron')
    }
    this.usedLetters.push(guessedLetter)
    print('You have now tried the following letters: ' + this.usedLetters)
    return guessedLetter
  }

  isOnlyLetters(userInput) {
    // Check if userInput is only letters
    return /^[A-Ö]+$/.test(userInput) // +:et gör att den testar för mer än ett tecken. [A-Ö] kollar att det är ETT tecken mellan de två
  }

  isOnlyOneLetter(userInput) {
    // Check if userInput is only letters
    return /^[A-Ö]$/.test(userInput) // +:et gör att den testar för mer än ett tecken. [A-Ö] kollar att det är ETT tecken mellan de två
  }

}