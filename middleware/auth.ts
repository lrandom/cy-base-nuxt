export default defineNuxtRouteMiddleware(() => {
    if (!useCookie("token").value) return navigateTo('/login');
});