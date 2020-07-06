import { User } from "../model/User"
import { View } from "../framework/view/View"

export class UserForm extends View<User> {
  onRender() {}

  eventsMap(): { [key: string]: () => void } {
    return {
      "click:.set-age": this.onSetAgeClick,
      "click:.set-name": this.onSetNameClick,
      "click:.save-model": this.onSaveClick,
    }
  }

  onSetAgeClick = () => {
    this.model.setRandomAge()
  }

  onSetNameClick = () => {
    const input = this.parent.querySelector("input")

    if (input) {
      const name = input.value

      this.model.set({ name })
    }
  }

  onSaveClick = () => {
    this.model.save()
  }

  template(): string {
    return `
      <div>
        <input placeholder="${this.model.get("name")}"/>
        <button class="set-name">Set Name</button>
        <button class="set-age">Set Random Age</button>
        <button class="save-model">Save User</button>
      </div>
    `
  }
}
