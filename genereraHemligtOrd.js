import { readFileSync } from 'node:fs'

let hemligaOrden = readFileSync("data/ordlista.csv", "utf8")

hemligaOrden = hemligaOrden.trim().split("\r\n")

let ordListan = []

for (let orden of hemligaOrden) {
  ordListan.push(orden)
}

getSecretWord() {
  let generatedWordIndex = Math.floor(Math.random() * ordListan.length)
  let generatedWord = ordListan[generatedWordIndex]
  return generatedWord
}