export async function isLoggedIn(ctx) {
    const cookie = ctx.req === undefined ? ctx.req.headers.cookie : null
    return cookie
}