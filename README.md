## React Stepper Project

How to set up

```sh
git clone https://github.com/YeisonHunt/not_found_stepper
```
Then

```sh
npm run install
```

To run:

```sh
npm run dev
```

To test:

``` sh
npm run test
```


To run on docker:

```sh
docker-compose up -d
```


### Though process:


## Code Structure

The codebase is structured in a modular way, making it easy to understand and maintain. The main code resides in the `src` directory, which is further divided into subdirectories based on functionality. 

Here's a basic structure:

```
src/
├── components/        # Reusable components
├── components/Stepper # Main component
├── pages/             # Page components
└── main.tsx           # Entry point
```

This structure allows for high reusability as components are designed to be independent and reusable across different parts of the application.

## Scalability

The application is designed to be easily scalable. It uses Docker for containerization, which allows for easy deployment and scaling. The `docker-compose.yml` file in the root directory defines the services that make up the app. 

To scale the application with Docker, you can simply increase the number of containers for the service. For example, to scale the `app` service to 3 instances, you can run:

```sh
docker-compose up --scale app=3 -d
```

## Diagram

Here's a simple diagram to illustrate the structure:

```
+-----------------+
| Docker          |
| +-------------+ |
| | Node.js App | |
| | +---------+ | |
| | | src/    | | |
| | +---------+ | |
| +-------------+ |
+-----------------+
```

This diagram shows that the Node.js app is running inside a Docker container. The `src` directory is where the main application code resides.



## Design

Aclaration: For the design I wasn't sure about to follow the exact design showed on the pdf or follow an own oe. So only for this case I just take another design but I can do it pixel perfect if the client wanted that. 

## Re-usability

This package is intended to be publishable on `npm`. The idea is to installed in all the projects you need as an external package. There is more work to do on this step but I put the idea on paper since the start.

## Code-quality

Husky and eslint were added in conjuction with prettier configuration. 
This will ensure before commiting your work test and linters should be passed.
And in consecuence, modern rules for coding should be followed correctly as well.


This setup includes:

* [Docker](https://www.docker.com/)
* [Vite](https://vitejs.dev/)
* [Eslint](https://eslint.org/), [Typescript-eslint](https://typescript-eslint.io/), [eslint-airbnb-config](https://github.com/airbnb/javascript), [prettier](https://prettier.io/)
* [Vitest](https://vitest.dev/), [jsdom](https://github.com/jsdom/jsdom), [@testing-library](https://testing-library.com/)
* [React-router v6](https://reactrouter.com/en/main)

* [Tailwindcss](https://tailwindcss.com)




# References

* https://markus.oberlehner.net/blog/using-testing-library-jest-dom-with-vitest/
* https://testing-library.com/docs/queries/about#priority
* https://kentcdodds.com/blog/common-mistakes-with-react-testing-library

