import { readFileSync } from 'node:fs'

export default class HemligtOrd {

  hemligaOrden = readFileSync("data/ordlista.csv", "utf8")
  hemligaOrden = hemligaOrden.trim().split("\r\n")

  ordListan = []

  get odlista() {
    for (let orden of hemligaOrden) {
      ordListan.push(orden)
    }
    return this.ordListan
  }

  constructor(hemligtOrd) {
    this.getSecretWord
  }

  getSecretWord() {
    let generatedWordIndex = Math.floor(Math.random() * ordListan.length)
    let generatedWord = ordListan[generatedWordIndex]
    return generatedWord
  }

}