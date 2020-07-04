import { View } from "../model/View"
import { Callback } from "../model/Callback"
import { User } from "../model/User"
import { UserForm } from "./UserForm"
import { UserShow } from "./UserShow"

export class UserEdit extends View<User> {
  onRender() {
    new UserShow(this.regions.userShow, this.model).render()
    new UserForm(this.regions.userForm, this.model).render()
  }

  eventsMap(): { [key: string]: Callback } {
    return {}
  }

  regionsMap(): { [key: string]: string } {
    return {
      userShow: ".user-show",
      userForm: ".user-form",
    }
  }

  template(): string {
    return `
      <div>
        <div class="user-show"></div>
        <div class="user-form"></div>
      </div<
    `
  }
}
