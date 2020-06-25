import faker from "faker"

export class User {
  name: string
  location: {
    lat: number
    lon: number
  }

  constructor() {
    this.name = faker.name.findName()
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      lon: parseFloat(faker.address.longitude()),
    }
  }
}
