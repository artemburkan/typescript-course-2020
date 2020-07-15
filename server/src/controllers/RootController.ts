import { Request, Response, NextFunction } from "express"
import { get, controller, use } from "./decorators"

function requireAuth(req: Request, res: Response, next: NextFunction): void {
  if (req.session && req.session.loggedIn) {
    next()
    return
  }

  res.status(403)
  res.send("Not permitted")
}

@controller("")
class RootController {
  @get("/")
  getRoot(request: Request, response: Response, next: NextFunction) {
    if (request.session?.loggedIn) {
      response.send(`
        <div>
          <div>
            You are logged in
          </div>
          <a href="/auth/logout">
            Logout
          </a>
        </div>
      `)
    } else {
      response.send(`
        <div>
          <div>
            You are not logged in
          </div>
          <a href="/auth/login">
            Login
          </a>
        </div>
      `)
    }
  }

  @get("/protected")
  @use(requireAuth)
  getProtected(request: Request, response: Response) {
    response.send("Welcome to protected route, logged in user")
  }
}
