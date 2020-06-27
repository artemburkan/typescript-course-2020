import { MatchReader } from "./models/MatchReader"
import { CsvFileReader } from "./models/CsvFileReader"
import { MatchResult } from "./models/MatchResult"

const filename = "footballStats.csv"
const csvFileReader = new CsvFileReader(filename)

const matchReader = new MatchReader(csvFileReader)
matchReader.load()

let manUnitedWins = 0

for (let match of matchReader.matches) {
  if (match[1] === "Man United" && match[5] === MatchResult.homeWin) {
    manUnitedWins++
  } else if (match[2] === "Man United" && match[5] === MatchResult.awayWin) {
    manUnitedWins++
  }
}

console.log(`Man United won ${manUnitedWins} games`)
