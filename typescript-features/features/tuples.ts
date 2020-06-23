const drink = {
  color: "brown",
  carbonated: true,
  sugar: 45,
}

// type alias
type Drink = [string, boolean, number]

const pepsi: Drink = ["brown", true, 45]
const sprite: Drink = ["clear", true, 45]
