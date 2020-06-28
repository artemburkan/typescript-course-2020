import { dateSctringToDate } from "../utils/utils"
import { MatchResult } from "./match/MatchResult"
import { MatchData } from "./match/MatchData"
import { DataReader } from "./DataReader"
import { CsvFileReader } from "./CsvFileReader"

export class MatchReader {
  matches: MatchData[] = []

  constructor(private dataReader: DataReader) {}

  static fromCsv(): MatchReader {
    return new MatchReader(new CsvFileReader())
  }

  load(filename: string) {
    this.matches = this.dataReader
      .read(filename)
      .map((row) => {
        return row.split(",")
      })
      .map(
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
