import { signUp } from "../controller/UserController.js";

export function route(app) {
    app.post("/signup", signUp);
}
