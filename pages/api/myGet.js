import Router from "next/router"

export async function myGet(url, ctx) {
    const cookie = ctx.req ? ctx.req.headers.cookie : null
    const resp = await fetch(url, {
        headers: {
            cookie: cookie,
        },
    })

    if (resp.status === 401 && !ctx.req) {
        Router.replace("/login")
        return
    }

    if (resp.status === 401 && ctx.req) {
        ctx.res.writeHead(302, {
            Location: "http://localhost:3000/login",
        })
        ctx.res.end()
        return
    }

    const json = await resp.json()
    return json
}