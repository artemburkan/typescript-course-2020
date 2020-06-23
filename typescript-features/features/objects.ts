const profile = {
  name: "Artyom",
  age: 25,
  coords: {
    lat: 0,
    lon: 10,
  },

  setAge(age: number) {
    this.age = age
  },
}

const { age }: { age: number } = profile
const {
  coords: { lat, lon },
}: { coords: { lat: number; lon: number } } = profile
