export default class SecretWord {

  chars = []

  constructor(word) {
    // process secret word into chars
    this.chars = this.processWord(word)
  }

}