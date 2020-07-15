import { Request, Response } from "express"
import { get, controller, bodyValidator, post } from "./decorators"

@controller("/auth")
class LoginController {
  @get("/login")
  getLogin(request: Request, response: Response) {
    response.send(`
      <form method="post">
        <div>
          <label>
            Email
          </label>
          <input name="email" />
        </div>
        <div>
          <label>
            Password
          </label>
          <input name="password" type="password" />
        </div>
        <button>
          Submit
        </button
      </form>
    `)
  }

  @post("/login")
  @bodyValidator("email", "password")
  postLogin(request: Request, response: Response) {
    const { email, password } = request.body

    if (email && password && email === "hi@hi.com" && password === "password") {
      // mark person as logged in
      request.session = { loggedIn: true }

      // redirect them to the root route
      response.redirect("/")
    } else {
      response.send("Invalid email or password")
    }
  }

  @get("/logout")
  getLogout(request: Request, response: Response) {
    request.session = null
    response.redirect("/")
  }
}
