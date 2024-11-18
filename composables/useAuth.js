import {useAuthRepo} from "~/composables/repositories/useAuthRepo.js";

export const useAuth = defineStore("auth", ()=>{
    const user = ref({
        name: 'John Doe',
        email: ""
    })

    const login = function () {
        useAuthRepo().login();
    };

    const logout = function () {

    };
    return{
        login,
        logout,
        user
    }
});