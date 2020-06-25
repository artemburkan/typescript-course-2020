import faker from "faker"
import { Mappable } from "./Map"

export class Company implements Mappable {
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

  markerContent(): string {
    return `
      <div>
        <h3>Company name: ${this.companyName}</h3>
        <div>Catchphrase: ${this.catchPhrase}</div>
      </div>
    `
  }
}
