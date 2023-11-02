export default class FoundWord {

  letters = []

  constructor(secretWord) {
    this.createNotFoundLetters(secretWord.chars)
  }
}