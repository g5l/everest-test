![Everest Logo](public/everest-logo.svg?raw=true "Everest Logo")

# TODO App Challenge

Instructions for the implementation can be found in the [INSTRUCTIONS](./INSTRUCTIONS.md) doc.

## Starting the app for the first time

### `yarn install`

This will install all the dependencies of the project defined in `package.json`. Whenever that file changes, you will also need to re-run this command to make sure all packages are updated.

### `yarn start`

Opens a browser tab pointing to [http://localhost:5173](http://localhost:5173).

- Runs the app in the development mode.
- The page will reload if you make edits.
- You will also see any typing and lint errors in the console.

## Features

* React 18 with TypeScript 
* Vite for fast development and building 
* Mantine UI components 
* Framer Motion for animations 
* Axios for API requests 
* Storybook for component documentation 
* Jest and React Testing Library for unit testing
* Cypress for E2E testing 
* ESLint and Prettier for code linting and formatting 
* Husky and lint-staged for pre-commit hooks

## Project Structure
````
├── cypress/          # E2E tests
├── generators/       # Component generation files (using Plop)
├── src/
│   ├── api/          # API communication layer
│   ├── assets/       # Images and other static assets
│   ├── components/   # React components
│   ├── constants/    # TypeScript constants
│   ├── hooks/        # Custom React hooks
│   ├── pages/        # Application pages
│   ├── services/     # Service layer for data handling
│   ├── types/        # Global TypeScript types
│   └── util/         # Utility functions
````

### Detailed Structure Description
`cypress/`

Contains end-to-end (E2E) tests for the application. These tests simulate user interactions to ensure the application works correctly from a user's perspective.

`generators/`

Houses generator files used to automate the creation of components. This project uses Plop for code generation, which helps maintain consistency in component structure and boilerplate code.

`src/`

The main source code directory for the application.

`api/`: Contains modules for communicating with the server. This layer is responsible for making HTTP requests and handling responses, providing a clean interface for the service layer.

`assets/`: Stores static files such as images, icons, and other media used in the application.

`components/`: Houses all reusable React components. Each component has its own directory with the following structure:

* `index.tsx`: The main React component file containing the component's logic and JSX.
* `stories.tsx`: Storybook file for documenting and showcasing the component in isolation.
* `style.module.css`: CSS Module file for component-specific styles, ensuring style encapsulation.

`constants/`: Contains TypeScript files defining constant values used throughout the application. This helps maintain consistency and makes it easier to update shared values.

`hooks/`: Custom React hooks that encapsulate reusable stateful logic, making it easier to share complex behavior across components.

`pages/`: Contains components that represent entire pages or views in the application. These components typically compose smaller components from the `components/` directory.

`services`/: The service layer acts as an intermediary between the API layer and the components. It's responsible for data transformation, business logic, and providing data in the format required by the components.

`types`/: Houses global TypeScript type definitions used across the application, promoting type safety and consistency.

`util`/: Contains utility functions and helper modules that can be used across different parts of the application.
