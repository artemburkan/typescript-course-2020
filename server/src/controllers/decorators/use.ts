import "reflect-metadata"
import { RequestHandler } from "express"
import { MetadataKey } from "./MetadataKey"

export function use(middleware: RequestHandler) {
  return function (target: any, key: string, desc: PropertyDescriptor) {
    const middlewares =
      Reflect.getMetadata(MetadataKey.middleware, target, key) || []

    middlewares.push(middleware)

    Reflect.defineMetadata(
      MetadataKey.middleware,
      [...middlewares, middleware],
      target,
      key
    )
  }
}
