import { dateSctringToDate } from "../utils/utils"
import { MatchResult } from "./match/MatchResult"
import { MatchData } from "./match/MatchData"
import { DataReader } from "./DataReader"
import { CsvFileReader } from "./CsvFileReader"

export class MatchReader {
  matches: MatchData[] = []

  constructor(public dataReader: DataReader) {}

  static fromCsv(filename: string): MatchReader {
    return new MatchReader(new CsvFileReader(filename))
  }

  load() {
    this.dataReader.read()
    this.matches = this.dataReader.data.map(
      (row): MatchData => {
        return [
          dateSctringToDate(row[0]),
          row[1],
          row[2],
          parseInt(row[3]),
          parseInt(row[4]),
          row[5] as MatchResult,
          row[6],
        ]
      }
    )
  }
}
