const next = require('next')

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

const prepare = async () => {
    console.log("Compiling frontend...");
    await app.prepare();
    
    if (dev) {
        fastify.get('/_next/*', (req, reply) => {
            return handle(req.req, reply.res).then(() => {
                reply.sent = true
            })
        })
    }
    
    fastify.all('/*', (req, reply) => {
        return handle(req.req, reply.res).then(() => {
            reply.sent = true
        })
    })
    
    fastify.setNotFoundHandler((request, reply) => {
        return app.render404(request.req, reply.res).then(() => {
            reply.sent = true
        })
    })

    fastify.get('/hello', (req, reply) => {
        const {username} = req.query;
        reply.send({ hello: username })
    })

    console.log("Next.js is ready!");
    return Promise.resolve();
}

// Require the framework and instantiate it
const fastify = require('fastify')({ logger: true })

prepare().catch(err => {
    throw err;
}).then( () => { 
    console.log("Starting server...");
    // Run the server!
    fastify.listen(3000, (err, address) => {
        if (err) throw err
        fastify.log.info(`server listening on ${address}`)
    })
});
