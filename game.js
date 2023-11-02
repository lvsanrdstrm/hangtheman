import SecretWord from "./secret-word.js"
import Question from "./question.js"
import FoundWord from "./found-word.js"
import Gallows from "./gallows.js"

const print = console.log

export default class Game {

  secretWord
  foundWord
  gallows

  usedLetters = []

  constructor() {
    print("Welcome to a simple game of hangman. You are doomed!")
    this.runRound()
  }


  runRound() {
    // create a new gallows
    this.gallows = new Gallows()
    // 10. ask for secret word                         bass
    this.secretWord = new SecretWord(NÅTANNAT) //jag tänker att inputen på något sätt här ska vara import från genHeOrd
    print("The secret word has " + this.secretWord.length + " letters")
    // process secret word into chars                  b a s s
    // store found word as empty positions for chars   _ _ _ _
    this.foundWord = new FoundWord(this.secretWord)
    print(this.foundWord.asString)
    // 20. ask for letter ? 
    this.guessWord()
    // loose round
    // win round
    // goto 10
    // this.runRound()
  }

  guessWord() {
    let letter = new Question("Guess a letter: ")
    print("You guessed " + letter)
    // find if the letter is in the secret word
    if (this.secretWord.isLetterInSecretWord(letter)) {
      //  (b)  found            store  x in used chars,  b _ _ _
      //  (s)  found            store  s in used chars,  b _ s s 
      let positions = this.secretWord.getLetterPositions(letter)
      this.foundWord.applyFoundLetter(letter, positions)
      //här vill jag lägga in nuvarande gallow
      print("You found \n" + this.foundWord.asString)
      // check if word i complete (no empty slots)? exit to win round
      print('Good job, but never lower your guard. You only have ' + this.gallows.stages.length + ' tries left and still ' + this.lettersLeft() + ' letters to find...')
      this.checkWin()
    } else {
      //  (x)  not found        store  x in used chars, add part to gallows
      print(this.gallows.step())
      print('You are closing up on a certain death. Only ' + this.gallows.stages.length + ' tries left and still ' + this.lettersLeft() + ' letters to find... Do you enjoy living? Try harder.')
      this.checkLoose()
      // check if gallows is done? exit to loose round
    }
  }

  checkWin() {
    if (!this.foundWord.letters.includes('*')) {
      print("Congratulations, you barely survived this time \n" + this.foundWord.asString)
    } else {
      // goto 20
      this.guessWord()
    }
  }

  checkLoose() {
    if (this.gallows.stages.length == 0) {
      print("Wonderful, you got to hang! \n" + "The word was " + this.secretWord.asString)
    } else {
      // goto 20
      this.guessWord()
    }
  }

  lettersLeft() {
    let letterseLeftCount = this.foundWord.letters.filter(element => /[\*]+/g.test(element))
    return letterseLeftCount.length
  }
}