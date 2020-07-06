import { Model } from "../model/Model"
import { Callback } from "../model/Callback"
import { HasId } from "../model/RemoteSync"

type Regions = { [key: string]: Element }

export abstract class View<T extends Model<HasId>> {
  regions: Regions = {}

  constructor(public parent: Element, public model: T) {
    this.bindModel()
  }

  regionsMap(): { [key: string]: string } {
    return {}
  }

  abstract eventsMap(): { [key: string]: Callback }

  abstract template(): string

  bindModel() {
    this.model.on("change", () => {
      this.render()
    })
  }

  bindEvents(fragment: DocumentFragment) {
    const eventsMap = this.eventsMap()

    for (let eventKey in eventsMap) {
      const [eventName, selector] = eventKey.split(":")

      fragment.querySelectorAll(selector).forEach((element) => {
        element.addEventListener(eventName, eventsMap[eventKey])
      })
    }
  }

  mapRegions(fragment: DocumentFragment): void {
    const regionsMap = this.regionsMap()

    for (let key in regionsMap) {
      const selector = regionsMap[key]
      const element = fragment.querySelector(selector)

      if (element) {
        this.regions[key] = element
      }
    }
  }

  abstract onRender(): void

  render() {
    this.parent.innerHTML = ""

    const templateElement = document.createElement("template")
    templateElement.innerHTML = this.template()

    this.bindEvents(templateElement.content)
    this.mapRegions(templateElement.content)

    this.onRender()

    this.parent.append(templateElement.content)
  }
}
