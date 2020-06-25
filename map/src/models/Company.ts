import faker from "faker"

export class Company {
  companyName: string
  catchPhrase: string
  location: {
    lat: number
    lon: number
  }

  constructor() {
    this.companyName = faker.company.companyName()
    this.catchPhrase = faker.company.catchPhrase()
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      lon: parseFloat(faker.address.longitude()),
    }
  }
}
