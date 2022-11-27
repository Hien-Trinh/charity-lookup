export async function isLoggedIn(ctx) {
    const cookie = ctx.req.cookies.auth
    return cookie
}