import runGame from '../index.js'

const GAME_DESCRIPTION
  = 'Answer "yes" if given number is prime. Otherwise answer "no".'

const getRandomNumber = () => Math.floor(Math.random() * 100) + 1

// Предикат: возвращает true / false
const isPrime = (number) => {
  if (number < 2) {
    return false
  }

  for (let i = 2; i <= Math.sqrt(number); i += 1) {
    if (number % i === 0) {
      return false
    }
  }

  return true
}

const getRoundData = () => {
  const number = getRandomNumber()
  const question = String(number)
  const correctAnswer = isPrime(number) ? 'yes' : 'no'

  return { question, correctAnswer }
}

const runPrimeGame = () => {
  runGame(GAME_DESCRIPTION, getRoundData)
}

export default runPrimeGame
