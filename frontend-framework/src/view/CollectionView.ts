import { Collection } from "../model/Collection"

export abstract class CollectionView<T> {
  constructor(public parent: Element, public collection: Collection<T>) {}

  abstract renderElement(model: T, elementParent: Element): void

  render() {
    this.parent.innerHTML = ""

    const templateElement = document.createElement("template")

    for (let model of this.collection.models) {
      const elementParent = document.createElement("div")
      this.renderElement(model, elementParent)
      templateElement.content.append(elementParent)
    }

    this.parent.append(templateElement.content)
  }
}
