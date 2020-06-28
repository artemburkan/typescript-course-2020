import { MatchData } from "./match/MatchData"
import { WinsAnalysis } from "./WinsAnalysis"
import { HtmlReport } from "./reports/HtmlReport"
import { ConsoleReport } from "./reports/ConsoleReport"

export interface Analyzer {
  run(team: string, matches: MatchData[]): string
}

export interface OutputTarget {
  print(report: string): void
}

export class Summary {
  static winsAnaysisWithHtmlReport(): Summary {
    return new Summary(new WinsAnalysis(), new HtmlReport())
  }

  static winsAnaysisWithConsoleReport(): Summary {
    return new Summary(new WinsAnalysis(), new ConsoleReport())
  }

  constructor(public analyzer: Analyzer, public outputTarget: OutputTarget) {}

  buildAndPrintReport(team: string, matches: MatchData[]) {
    const output = this.analyzer.run(team, matches)
    this.outputTarget.print(output)
  }
}
