# Challenge

_This project was developed with React, Typescript and Redux._

## Instructions 🚀

You should clone this repository using the following script:

```
git clone https://github.com/matias8588/workouts-cg
```

### Installation 🔧

Just run the following commands. It's easy!

```
npm install & npm run start
```

or

```
yarn & yarn start
```

### App State 🔄

Context API is used on this project. It provides a global state to the app. It is a simple way to manage the state of the app.

### Clean code 💅🏻

I've added Husky + Lint-staged flow, in order to keep safe our code. They check errors on pre-commit and pre-push events.

```
yarn prepare
```

Also, I've added too ESLint rules that order correctly the imports lines by group and order alphabetically props components.

### Testing 🧪

I've added Cypress to test the app. It's a simple way to test the app e2e and also testing-library to test the components.

For unit testing
```
yarn test
```

For e2e testing
```
yarn cypress:run
```

## Deploy 📦

I've decided to use netlify because it has a simple Installation and Configuration flow. Netlify allows us that on every commit into `main` a new deploy runs upgrading the Site page.

- Live demo on: <https://matias8588.github.io/workouts-cg//>

## Build-with 🛠️

- React
- Typescript
- Styled Components
- Cypress
- ESLint
- Prettier

## Author 👨🏻‍💻

- **Matias Cejas** - [matias8588](https://github.com/matias8588)
