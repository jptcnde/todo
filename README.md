This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### Structure
The project is designed for showcase purposes only, the structure might overkill for
a simple app but this only shows a better approach on designing a big single page app

in which I have adapted the structure from

[react-boilerplate](https://github.com/react-boilerplate/react-boilerplate)
as the project proven itself over the years


## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.


### Data Model
- User
  - id : str
  - name: str
- PaymentMode
  - americanExpress: str
  - visa: str
  - dbsPayla: str
- Transaction
  - amount: number
  - id: str
  - user: User
  - paymentMode


### Tech Stack

- CRA 2
- React 16.7.* (features react hooks alpha version)
  - the implementation is located at src/containers/PaymentTransaction/TxnDataTable.js
- material ui
- rematch redux
- jest
- recharts
- eslint (AirBnB standard rules)
- prettier


