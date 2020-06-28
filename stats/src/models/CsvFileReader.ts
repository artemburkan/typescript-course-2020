import fs from "fs"
import { DataReader } from "./DataReader"

export class CsvFileReader implements DataReader {
  read(filename: string): string[] {
    const data = fs.readFileSync(filename, { encoding: "utf-8" }).split("\n")

    return data
  }
}
