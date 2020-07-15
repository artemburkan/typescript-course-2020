import express, { Request, Response } from "express"
import bodyParser from "body-parser"
import cookieSession from "cookie-session"
import { AppRouter } from "./AppRouter"
import "./controllers/LoginController"
import "./controllers/RootController"

class Server {
  protected express: express.Express = express()

  private constructor() {
    this.express.use(bodyParser.urlencoded({ extended: true }))
    this.express.use(cookieSession({ keys: ["asdasd"] }))
    this.express.use(AppRouter.shared)
  }

  static start(): Server {
    const server = new Server()
    server.express.listen(3000, () => {
      console.log("Listening on port 3000")
    })

    return server
  }
}

const server = Server.start()
