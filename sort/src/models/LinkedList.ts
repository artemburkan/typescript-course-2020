import { Sorter } from "./Sorter"

class Data {
  next: Data | null = null

  constructor(public value: number) {}
}

export class LinkedList extends Sorter {
  private head: Data | null = null

  get length(): number {
    if (!this.head) {
      return 0
    }

    let lenght = 1
    let data = this.head

    while (data.next) {
      lenght++
      data = data.next
    }

    return lenght
  }

  add(value: number) {
    const data = new Data(value)

    if (!this.head) {
      this.head = data

      return
    }

    let tail = this.head
    while (tail.next) {
      tail = tail.next
    }

    tail.next = data
  }

  private at(index: number): Data {
    if (!this.head) {
      throw new Error("Index out of bounds")
    }

    let counter = 0
    let data: Data | null = this.head
    while (data) {
      if (counter === index) {
        return data
      }

      counter++
      data = data.next
    }

    throw new Error("Index out of bounds")
  }

  protected compare(leftIndex: number, rightIndex: number): boolean {
    if (!this.head) {
      throw new Error("List is empty")
    }

    return this.at(leftIndex).value > this.at(rightIndex).value
  }

  protected swap(leftIndex: number, rightIndex: number): void {
    const leftValue = this.at(leftIndex).value
    this.at(leftIndex).value = this.at(rightIndex).value
    this.at(rightIndex).value = leftValue
  }

  print() {
    if (!this.head) {
      return
    }

    let data: Data | null = this.head
    while (data) {
      console.log(data.value)
      data = data.next
    }
  }
}
