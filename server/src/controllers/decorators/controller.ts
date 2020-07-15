import "reflect-metadata"
import express, {
  Request,
  Response,
  NextFunction,
  RequestHandler,
} from "express"
import { AppRouter } from "../../AppRouter"
import { Method } from "./Method"
import { MetadataKey } from "./MetadataKey"

function bodyValidators(keys: string): RequestHandler {
  return function (request: Request, response: Response, next: NextFunction) {
    if (!request.body) {
      response.status(422).send("Invalid request")
      return
    }

    for (let key of keys) {
      if (!request.body[key]) {
        response.status(422).send(`Missing property ${key}`)
        return
      }
    }

    next()
  }
}

export function controller(routePrefix: string) {
  return function (target: Function) {
    const appRouter = AppRouter.shared

    for (let key in target.prototype) {
      const routeHandler = target.prototype[key]

      const path = Reflect.getMetadata(MetadataKey.path, target.prototype, key)

      const method: Method = Reflect.getMetadata(
        MetadataKey.method,
        target.prototype,
        key
      )

      const middlewares =
        Reflect.getMetadata(MetadataKey.middleware, target.prototype, key) || []

      const requiredBodyProps =
        Reflect.getMetadata(MetadataKey.validator, target.prototype, key) || []

      const validator = bodyValidators(requiredBodyProps)

      if (path) {
        appRouter[method](
          `${routePrefix}${path}`,
          ...middlewares,
          validator,
          routeHandler
        )
      }
    }
  }
}
