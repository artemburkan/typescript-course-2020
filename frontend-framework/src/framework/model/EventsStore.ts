import { Callback } from "./Callback"

export interface EventsCollection {
  [key: string]: Callback[]
}

export class EventsStore {
  private collection: EventsCollection = {}

  on = (eventName: string, callback: Callback) => {
    const handlers = this.collection[eventName] || []
    handlers.push(callback)
    this.collection[eventName] = handlers
  }

  trigger = (eventName: string) => {
    const handlers = this.collection[eventName]

    if (!handlers || handlers.length === 0) {
      return
    }

    handlers.forEach((handler) => {
      handler()
    })
  }
}
