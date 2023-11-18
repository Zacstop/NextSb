# Next.js 13 with Typescript reference architecture

## Getting Started

Start your project with this template.

```bash
yarn create next-app -e https://github.com/imperadorxs/nextjs-13-boilerplate
```

### How to run

`npm install`
`npm dev`
<br />
`yarn`
`yarn dev`

### How to build

`npm run build`
<br />
`yarn build`

### How to tests

`npm test`
<br />
`yarn test`

## File structure

**This is your source code tree:**

```javascript
src
|-- common
   |-- assets
   |-- helpers
   |-- mocks
   |-- styles
   |-- utils
|-- components
|-- config
|-- hooks
|-- app
   |-- lib
          |-- registry
   |-- head.tsx
   |-- layout.tsx
   |-- page.tsx
|-- services
...
```

**This is your component structure:**

```javascript
...
components
|-- YourComponent
   |-- YourComponent.tsx
   |-- YourComponent.spec.ts
   |-- YourComponent.stories.tsx
   |-- interfaces.ts
   |-- styles.ts
   |-- index.tsx
...
```

**These are the folders and their functions:**

`./common`

Here are all the project assets that will be used by the application such as global styles, images, fonts, mocks, reusable functions, among others

`./components`

Components are presentational only elements, grouping UI items

`./configs`

Configs are our application's global settings files

`./hooks`

Hooks are functions that allow you to “plug in” to React's state and lifecycle features from functional components

`./app`

App is a new pages folder are mapped in routes and have all the containers needed to implement a functionality

`./services`

Contains all the files responsible for consuming external services, such as the axios configuration file for consuming RestFul APIs.

### More utils commands

Find and fix javascript and TypeScript problems according to pre-defined rules
`npm run lint`
`yarn lint`

## Advantages of using this react project template

The project is already configured with:

- React
- Typescript
- Jest
- Eslint
- Prettier
- Styled
- Husky
- Storybook

### Main dependencies

- [nextjs](https://nextjs.org/blog/next-13/)
- [react](https://reactjs.org/)
- [styled-components](https://styled-components.com/)

### Main dev dependencies

- [testing-library](https://testing-library.com/)
- [eslint](https://eslint.org/)
- [husky](https://www.npmjs.com/package/husky)
- [lint-staged](https://www.npmjs.com/package/lint-staged)
- [prettier](https://prettier.io/)
- [typescript](https://www.typescriptlang.org/)
- [web-vitals](https://web.dev/vitals/)
# NextSb
