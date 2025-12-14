import runGame from '../index.js'

const GAME_DESCRIPTION = 'What number is missing in the progression?'

const MIN_LENGTH = 5
const MAX_LENGTH = 10

const getRandomNumber = (min, max) =>
  Math.floor(Math.random() * (max - min + 1)) + min

// Отдельная функция генерации прогрессии
const makeProgression = (start, step, length) =>
  Array.from({ length }, (_, index) => start + index * step)

const getRoundData = () => {
  const length = getRandomNumber(MIN_LENGTH, MAX_LENGTH)
  const start = getRandomNumber(1, 20)
  const step = getRandomNumber(1, 10)

  const progression = makeProgression(start, step, length)
  const hiddenIndex = getRandomNumber(0, length - 1)

  const correctAnswer = String(progression[hiddenIndex])
  progression[hiddenIndex] = '..'

  const question = progression.join(' ')

  return { question, correctAnswer }
}

const runProgressionGame = () => {
  runGame(GAME_DESCRIPTION, getRoundData)
}

export default runProgressionGame
