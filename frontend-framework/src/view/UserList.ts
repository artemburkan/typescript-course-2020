import { CollectionView } from "./CollectionView"
import { User } from "../model/User"
import { UserShow } from "../view/UserShow"

export class UserList extends CollectionView<User> {
  renderElement(model: User, elementParent: Element): void {
    new UserShow(elementParent, model).render()
  }
}
