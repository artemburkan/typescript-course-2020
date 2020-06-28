import { MatchReader } from "./models/MatchReader"
import { Summary } from "./models/Summary"
import { match } from "assert"

const filename = "footballStats.csv"

const matchReader = MatchReader.fromCsv()
matchReader.load(filename)

const summary = Summary.winsAnaysisWithConsoleReport()

summary.buildAndPrintReport("Man United", matchReader.matches)
