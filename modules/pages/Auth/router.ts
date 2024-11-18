import {resolve} from "pathe";

module.exports = [
    {
        name: "Auth_Login",
        path: "/login",
        file: resolve("modules/pages/Auth/Login.vue")
    },
    {
        name: "Auth_Signup",
        path: "/signup",
        file: resolve("modules/pages/Auth/Signup.vue")
    }
]