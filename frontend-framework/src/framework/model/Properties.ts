export class Properties<T> {
  constructor(private data: T) {}

  get = <K extends keyof T>(key: K): T[K] => {
    return this.data[key]
  }

  set(update: T) {
    this.data = { ...this.data, ...update }
    // Object.assign(this.data, update)
  }

  getAll(): T {
    return this.data
  }
}
