import { NumbersCollection } from "./models/NumbersCollection"
import { CharactersCollection } from "./models/CharactersCollection"
import { LinkedList } from "./models/LinkedList"

const numbersCollection = new NumbersCollection([10, 3, -5, 0])
numbersCollection.sort()
console.log(numbersCollection.data)

const charactersCollection = new CharactersCollection("Xaayb")
charactersCollection.sort()
console.log(charactersCollection.data)

const linkedList = new LinkedList()
linkedList.add(500)
linkedList.add(-10)
linkedList.add(-3)
linkedList.add(4)

linkedList.sort()
linkedList.print()
