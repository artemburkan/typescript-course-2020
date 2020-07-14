@classDecorator
class Boat {
  color: string = "red"

  get formattedColor(): string {
    return `This boat color is ${this.color}`
  }

  @errorLogger("Ooops something went wrong")
  pilot() {
    console.log("swish")
  }
}

function classDecorator(constructor: typeof Boat) {
  console.log(arguments)
}

function errorLogger(errorMessage: string) {
  return function (target: any, key: string, desc: PropertyDescriptor) {
    try {
      target[key]()
    } catch {
      throw new Error(errorMessage)
    }
  }
}
