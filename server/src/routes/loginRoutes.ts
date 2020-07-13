import { Router, Request, Response, NextFunction } from "express"

interface RequestWithBody extends Request {
  body: { [key: string]: string | undefined }
}

function requireAuth(request: Request, response: Response, next: NextFunction) {
  if (request.session?.loggedIn) {
    next()
    return
  }

  response.status(403)
  response.send("Not permitted.")
}

const router = Router()

router.get("/login", (request: Request, response: Response) => {
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
})

router.post("/login", (request: RequestWithBody, response: Response) => {
  console.log("request", request)

  const { email, password } = request.body

  if (email && password && email === "hi@hi.com" && password === "password") {
    // mark person as logged in
    request.session = { loggedIn: true }

    // redirect them to the root route
    response.redirect("/")
  } else {
    response.send("Invalid email or password")
  }
})

router.get("/", (request: Request, response: Response) => {
  if (request.session?.loggedIn) {
    response.send(`
      <div>
        <div>
          You are logged in
        </div>
        <a href="/logout">
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
        <a href="/login">
          Login
        </a>
      </div>
    `)
  }
})

router.get("/logout", (request: Request, response: Response) => {
  request.session = null
  response.redirect("/")
})

router.get(
  "/protected",
  requireAuth,
  (request: Request, response: Response) => {
    response.send("Welcome to protected route, logged in user")
  }
)

export { router }
