export async function isLoggedIn(ctx) {
    const cookie = ctx.req?.headers.cookie
    return cookie
}