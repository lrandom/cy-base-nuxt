import {post} from "~/composables/repositories/useService.js";

const useAuthRepo = () => {
    const login = function (payload) {
        return post("/auth/login", payload);
    };

    const logout = function () {
        return post("/auth/logout");
    };

    const signup = function (payload) {
        return post("/auth/signup", payload);
    };

    return {
        login,
        logout,
        signup
    }
}
export {useAuthRepo};