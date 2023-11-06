
let ordListan = ["brisa", "Disa", "Flisa", "Grisa", "Isa", "Kisa", "Krisa", "Leasa", "Lisa", "Pisa", "Prisa", "Risa", "sisa", "Spisa", "Visa", "Avisa", "beprisa", "Bespisa", "Bevisa", "Elisa", "Förlisa", "Förvisa", "koncisa", "precisa"]



function getSecretWord() {
  let generatedWordIndex = Math.random() * ordListan.length
  let generatedWord = ordListan[Math.floor(generatedWordIndex)]
  return generatedWord
}

console.log(ordListan)

console.log(getSecretWord())

