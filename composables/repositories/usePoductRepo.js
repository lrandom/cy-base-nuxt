import {post} from "~/composables/repositories/useService.js";

const useProductRepo = () => {
    const list = function (payload) {
        return post("/product/list", payload);
    };

    const detail = function () {
        return post("/product/detail");
    };

    return {
        list,
        detail,
    }
}

export {useProductRepo}