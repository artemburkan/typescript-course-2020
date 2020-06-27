import { MatchData } from "./match/MatchData"
import { WinsAnalysis } from "./WinsAnalysis"
import { HtmlReport } from "./reports/HtmlReport"
import { ConsoleReport } from "./reports/ConsoleReport"

export interface Analyzer {
  run(matches: MatchData[]): string
}

export interface OutputTarget {
  print(report: string): void
}

export class Summary {
  static winsAnaysisWithHtmlReport(team: string): Summary {
    return new Summary(new WinsAnalysis(team), new HtmlReport())
  }

  static winsAnaysisWithConsoleReport(team: string): Summary {
    return new Summary(new WinsAnalysis(team), new ConsoleReport())
  }

  constructor(public analyzer: Analyzer, public outputTarget: OutputTarget) {}

  buildAndPrintReport(matches: MatchData[]) {
    const output = this.analyzer.run(matches)
    this.outputTarget.print(output)
  }
}
