
let hemligaOrden = ["brisa", "Disa", "Flisa", "Grisa", "Isa", "Kisa", "Krisa", "Leasa", "Lisa", "Pisa", "Prisa", "Risa", "sisa", "Spisa", "Visa", "Avisa", "beprisa", "Bespisa", "Bevisa", "Elisa", "Förlisa", "Förvisa", "koncisa", "precisa"]



function getSecretWord() {
  let generatedWordIndex = Math.random() * hemligaOrden.length
  let generatedWord = hemligaOrden[Math.floor(generatedWordIndex)]
  return generatedWord
}

console.log(hemligaOrden)

console.log(getSecretWord())

