import { View } from "./View"
import { Callback } from "../model/Callback"
import { User } from "../model/User"

export class UserShow extends View<User> {
  onRender() {}
  regionsMap(): { [key: string]: string } {
    return {}
  }
  eventsMap(): { [key: string]: Callback } {
    return {}
  }
  template(): string {
    return `
      <div>
        <h1>User Detail</h1>
        <div> User name: ${this.model.get("name")}</div>
        <div> User age: ${this.model.get("age")}</div>
      </div<
    `
  }
}
