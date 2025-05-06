import { signUp  , login} from "../controller/UserController.js";

export function route(app) {
    app.post("/signup", signUp);
    app.post("/login", login);
}
