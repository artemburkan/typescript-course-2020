import { MatchReader } from "./models/MatchReader"
import { Summary } from "./models/Summary"

const filename = "footballStats.csv"

const matchReader = MatchReader.fromCsv(filename)
matchReader.load()

const summary = Summary.winsAnaysisWithConsoleReport("Man United")

summary.buildAndPrintReport(matchReader.matches)
