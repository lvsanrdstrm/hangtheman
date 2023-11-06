import { readFileSync } from 'node:fs'

let hemligaOrden = readFileSync("data/ordlista.csv", "utf8")
hemligaOrden = hemligaOrden.trim().split("\r\n")

export default class HemligtOrd {

  ordListan = []
  currentWord

  skapaOrdlista() {
    for (let orden of hemligaOrden) {
      ordListan.push(orden)
    }
    alert(this.ordListan)
    return this.ordListan
  }

  constructor(hemligtOrd) {
    this.currentWord = this.getSecretWord
  }

  getSecretWord() {
    let generatedWordIndex = Math.floor(Math.random() * ordListan.length)
    let generatedWord = ordListan[generatedWordIndex]
    return generatedWord
  }

}