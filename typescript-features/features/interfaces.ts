// function interface
interface Logger {
  (logMessage: string): void
}

const loggerData: Logger = (logMessage: string) => {
  console.log(logMessage)
}
