# Fastify nextjs boilerplate

This is not going to be just a fastify nextjs boilerplate project, but it's heading to be an example on how to implement a full stack web application in js. 

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

First of all clone or fork this repository:
```
git clone https://github.com/TriX93/fastify-nextjs-boilerplate.git
```

Then npm install as usual:
```
npm install
```

Finally start the dev server and feel free to mess around with the code:
```
npm run dev
```

## Deployment

If things starts to get serious you can even think to deploy you project to production.
Notice this part in the server.js:

```
const dev = process.env.NODE_ENV !== 'production'
```

All you need is to set the NODE_ENV to 'production' and start the server.js file with nodemon:

```
npm install --save-dev nodemon
NODE_ENV=production nodemon ./server.js
```

or if you are under windows
```
npm install --save-dev nodemon
SET NODE_ENV=production
nodemon ./server.js
```

## Contributing

Feel free to fork the project and send me Pull Request.
Open Issues if you have problems with this code or to suggest improvements.
I really appreciate feedback!

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

