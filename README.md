# Deno Express Docker Starter 

![deno express docker logos](https://github.com/bobbyg603/deno-express-docker-starter/assets/2646053/057ed6a3-b96d-4fbe-8ae4-befa0c0b5c15)


## 📖 Definitions

| Library | Description |
| ------- | ----------- |
| [Deno](https://deno.land) | The easiest, most secure JavaScript runtime |
| [Express](https://expressjs.com/) | Minimal and flexible Node.js web application framework for creating [APIs](https://en.wikipedia.org/wiki/API) |
| [Docker](https://www.docker.com/) | Package software into standardized units for development, shipment and deployment |

## 🧑‍🏫 About

Deno-Express-Docker-Starter is a template repo for building a [Deno](https://nodejs.org/en/) [APIs](https://en.wikipedia.org/wiki/API) with [TypeScript](https://www.typescriptlang.org/), [Express](https://expressjs.com/) and [Docker](https://www.docker.com/).

## 🧑‍💻 Development

Install [Docker Desktop](https://www.docker.com/products/docker-desktop/), [VS Code](https://code.visualstudio.com/download) and [Git](https://git-scm.com/downloads). Click the green [Use this template](https://github.com/bobbyg603/deno-express-docker-starter/generate) button to copy this repo to your GitHub account. Once you've copied the repo, clone it to your workspace (be sure to replace my URL with the URL to the repo you generated by clicking `Use this template`):

### Clone

```sh
git clone https://github.com/bobbyg603/deno-express-docker-starter
```

### Developing

Run the `start` task to start the Express server.

```sh
deno task start
```

You can also use the VS Code `Launch` task to launch the server with the Debugger attached.

### Testing

Deno has a built-in test runner that you can use for testing JavaScript or TypeScript code.

```sh
deno task test
```

### Docker

Run the `docker` task to start the Express server inside a Docker container

```sh
deno task docker
```

Alternatively, run the `docker:debug` task to start the Express server inside a Docker container with the debug port exposed

```sh
deno task docker:debug
```

Attach to the Express server inside the Docker container by using the VS Code `Attach to Docker` task

### References

- https://deno.com/blog/build-api-express-typescript
- https://deno.com/manual@v1.31.3/basics/testing

- https://docs.docker.com/compose/reference/

### Contributing

If you believe that this example can be improved, please open an [issue](https://github.com/bobbyg603/deno-express-docker-starter/pulls) or submit a [pull request](https://github.com/bobbyg603/deno-express-docker-starter/pulls)! 
