import { OutputTarget } from "../Summary"
import fs from "fs"

export class HtmlReport implements OutputTarget {
  print(report: string): void {
    const htmlElements = `
      <div>
        <h1>Analysis output</h1>
        <div>${report}</div>
      </div>
    `

    fs.writeFileSync("report.html", htmlElements)
  }
}
