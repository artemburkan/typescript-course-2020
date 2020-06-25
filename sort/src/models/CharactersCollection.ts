import { Sorter } from "./Sorter"

export class CharactersCollection extends Sorter {
  constructor(public data: string) {
    super()
  }

  get length(): number {
    return this.data.length
  }

  protected compare(leftIndex: number, rightIndex: number): boolean {
    return (
      this.data[leftIndex].toLowerCase() > this.data[rightIndex].toLowerCase()
    )
  }

  protected swap(leftIndex: number, rightIndex: number): void {
    const characters = this.data.split("")

    const leftValue = characters[leftIndex]
    characters[leftIndex] = characters[rightIndex]
    characters[rightIndex] = leftValue

    this.data = characters.join("")
  }
}
