import runGame from '../index.js'

const GAME_DESCRIPTION = 'What is the result of the expression?'
const OPERATORS = ['+', '-', '*']

const getRandomNumber = () => Math.floor(Math.random() * 10) + 1
const getRandomOperator = () =>
  OPERATORS[Math.floor(Math.random() * OPERATORS.length)]

const calculate = (a, b, operator) => {
  switch (operator) {
    case '+':
      return a + b
    case '-':
      return a - b
    case '*':
      return a * b
    default:
      throw new Error(`Unknown operator: ${operator}`)
  }
}

const getRoundData = () => {
  const a = getRandomNumber()
  const b = getRandomNumber()
  const operator = getRandomOperator()

  const question = `${a} ${operator} ${b}`
  const correctAnswer = String(calculate(a, b, operator))

  return { question, correctAnswer }
}

const runCalcGame = () => {
  runGame(GAME_DESCRIPTION, getRoundData)
}

export default runCalcGame
