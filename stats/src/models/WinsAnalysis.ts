import { Analyzer } from "./Summary"
import { MatchData } from "./match/MatchData"
import { MatchResult } from "./match/MatchResult"

export class WinsAnalysis implements Analyzer {
  run(team: string, matches: MatchData[]): string {
    let wins = 0

    for (let match of matches) {
      if (match[1] === team && match[5] === MatchResult.homeWin) {
        wins++
      } else if (match[2] === team && match[5] === MatchResult.awayWin) {
        wins++
      }
    }

    return `Team ${team} won ${wins} games`
  }
}
