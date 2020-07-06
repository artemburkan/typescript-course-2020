import { EventsStore } from "../framework/model/EventsStore"
import { RemoteSync, HasId } from "../framework/model/RemoteSync"
import { Properties } from "../framework/model/Properties"
import { Model } from "../framework/model/Model"
import { Collection } from "../framework/model/Collection"

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
