abstract class Vehicle {
  constructor(public brand: string) {}

  move(vehicle: string) {
    console.log(`Get started moving by ${vehicle}`)
  }
}

class Car extends Vehicle {
  constructor(public owner: string, brand: string) {
    super(brand)
  }

  move() {
    super.move("car")
  }
}

class Bicycle extends Vehicle {
  move() {
    super.move("bicycle")
  }
}
