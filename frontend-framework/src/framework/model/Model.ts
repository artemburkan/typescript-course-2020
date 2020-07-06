import { AxiosPromise, AxiosResponse } from "axios"
import { HasId } from "./RemoteSync"
import { Callback } from "./Callback"

interface ModelProperties<T> {
  set(value: T): void
  getAll(): T
  get<K extends keyof T>(key: K): T[K]
}

interface RemoteSync<T> {
  fetch(id: number): AxiosPromise
  save(data: T): AxiosPromise
}

interface EventsStore {
  on(eventName: string, callback: Callback): void
  trigger(eventName: string): void
}

export class Model<T extends HasId> {
  constructor(
    private properties: ModelProperties<T>,
    private eventsStore: EventsStore,
    private remoteSync: RemoteSync<T>
  ) {}

  on = this.eventsStore.on

  trigger = this.eventsStore.trigger

  get = this.properties.get

  set(update: T) {
    console.log("update: ", update)
    this.properties.set(update)
    this.eventsStore.trigger("change")
  }

  fetch() {
    const id = this.get("id")

    if (!id) {
      throw new Error("Cannot fetch without id")
    }

    this.remoteSync.fetch(id).then((response: AxiosResponse) => {
      this.set(response.data)
    })
  }

  save() {
    this.remoteSync
      .save(this.properties.getAll())
      .then((response: AxiosResponse) => {
        this.trigger("save")
      })
      .catch(() => {
        this.trigger("error")
      })
  }
}
