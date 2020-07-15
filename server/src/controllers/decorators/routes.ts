import "reflect-metadata"
import { RequestHandler } from "express"
import { Method } from "./Method"
import { MetadataKey } from "./MetadataKey"

interface RouteHandlerDescriptor extends PropertyDescriptor {
  value?: RequestHandler
}

function routeBinder(method: string) {
  return function (path: string) {
    return function (target: any, key: string, desc: RouteHandlerDescriptor) {
      Reflect.defineMetadata(MetadataKey.path, path, target, key)
      Reflect.defineMetadata(MetadataKey.method, method, target, key)
    }
  }
}

export const get = routeBinder(Method.get)
export const put = routeBinder(Method.put)
export const post = routeBinder(Method.post)
export const del = routeBinder(Method.delete)
export const patch = routeBinder(Method.patch)
