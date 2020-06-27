import { CsvFileReader } from "./CsvFileReader"
import { dateSctringToDate } from "../utils/utils"
import { MatchResult } from "../models/match/MatchResult"
import { MatchData } from "../models/match/MatchData"

export class MatchReader extends CsvFileReader<MatchData> {
  mapRow(row: string[]): MatchData {
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
}
