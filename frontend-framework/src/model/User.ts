import axios, { AxiosResponse } from "axios"
import { EventsStore } from "./EventsStore"
import { RemoteSync, HasId } from "./RemoteSync"
import { Properties } from "./Properties"
import { Model } from "./Model"
import { Collection } from "./Collection"

export interface UserProps extends HasId {
  name?: string
  age?: number
}

const rootUrl = "http://localhost:3000/users"

export class User extends Model<UserProps> {
  static create(properties: UserProps) {
    return new User(
      new Properties<UserProps>(properties),
      new EventsStore(),
      new RemoteSync(rootUrl)
    )
  }

  static createCollection() {
    return new Collection<User>(rootUrl, (data) => {
      return User.create(data)
    })
  }

  setRandomAge() {
    const age = Math.round(Math.random() * 100)
    this.set({ age })
  }
}
