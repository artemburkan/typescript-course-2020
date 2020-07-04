import { User } from "./model/User"
import { Collection } from "./model/Collection"
import { UserList } from "./view/UserList"

const rootUrl = "http://localhost:3000/users"

const users = new Collection(rootUrl, <UserProps>(json: UserProps) => {
  return User.create(json)
})

users.on("change", () => {
  console.log(users)
  const rootElement = document.getElementById("root")

  if (rootElement) {
    new UserList(rootElement, users).render()
  }
})

users.fetch()
