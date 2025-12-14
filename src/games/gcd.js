import runGame from '../index.js'

const GAME_DESCRIPTION = 'Find the greatest common divisor of given numbers.'

const getRandomNumber = () => Math.floor(Math.random() * 100) + 1

// Чистая функция — не зависит от контекста использования
const getGcd = (a, b) => {
  let x = a
  let y = b

  while (y !== 0) {
    const temp = y
    y = x % y
    x = temp
  }

  return x
}

const getRoundData = () => {
  const a = getRandomNumber()
  const b = getRandomNumber()

  const question = `${a} ${b}`
  const correctAnswer = String(getGcd(a, b))

  return { question, correctAnswer }
}

const runGcdGame = () => {
  runGame(GAME_DESCRIPTION, getRoundData)
}

export default runGcdGame
