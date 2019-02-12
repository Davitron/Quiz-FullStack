import { UserController } from "./controller/UserController";

export const Routes = [{
    method: "get",
    route: "/users",
    controller: UserController,
    middlewares: [],
    action: "all"
}, {
    method: "get",
    route: "/users/:id",
    controller: UserController,
    middlewares: [],
    action: "one"
}, {
    method: "post",
    route: "/users",
    controller: UserController,
    middlewares: [],
    action: "save"
}, {
    method: "delete",
    route: "/users",
    controller: UserController,
    middlewares: [],
    action: "remove"
}];