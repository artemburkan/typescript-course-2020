import express, { Request, Response } from "express"
import { router } from "./routes/loginRoutes"
import bodyParser from "body-parser"
import cookieSession from "cookie-session"

class Server {
  app: express.Express = express()

  constructor() {
    this.app.use(bodyParser.urlencoded({ extended: true }))
    this.app.use(cookieSession({ keys: ["asdasd"] }))
    this.app.use(router)
  }

  start() {
    this.app.listen(3000, () => {
      console.log("Listening on port 3000")
    })
  }
}

const server = new Server().start()
