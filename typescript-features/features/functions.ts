const add = (a: number, b: number): number => {
  return a + b
}

const substract = (a: number, b: number): number => {
  return a - b
}

function multiply(a: number, b: number): number {
  return a * b
}

const divide = function (a: number, b: number): number {
  return a / b
}

// void and never
function logger(message: string): void {
  console.log(message)
}

function throwError(errorMessage: string): never {
  throw new Error(`Error message: ${errorMessage}`)
}

// object literals type
const weather = {
  type: "sunny",
  date: new Date(),
}

function weatherLoggerOne(weather: { type: string; date: Date }): void {
  console.log(`${weather.date} is ${weather.type}`)
}

function weatherLoggerTwo({ type, date }: { type: string; date: Date }): void {
  console.log(`${weather.date} is ${weather.type}`)
}
