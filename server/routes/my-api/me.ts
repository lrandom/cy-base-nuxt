import * as events from "node:events";
import {$fetch} from "ofetch";

defineEventHandler((event) => {
    const cookies = parseCookies(event);
    const token = cookies?.token;
    try {
        const data = $fetch("/api/v1/user",
            {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });
        return {
            data
        }
    } catch (e) {
        //xoa luon token
        setCookie(event, "token", '', {
            maxAge: 0
        })
    }
    return {}
});


