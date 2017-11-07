
This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).
<br>
[Demo](https://jzena.github.io/jzban-project/)
# Execute the project 
To launch the project, run the following commands:
- `npm install` to install all dependencies.
- `npm start` to launch the project.

## Documentation
- [redux](https://www.npmjs.com/package/redux)
- [react-redux](https://www.npmjs.com/package/react-redux)
- [react-router](https://reacttraining.com/react-router/)
- [redux-form](https://redux-form.com/7.1.2/docs/gettingstarted.md/)
- [react-intl](https://github.com/yahoo/react-intl)

## Dependencies
`npm install --save redux`<br>
`npm install --save react-redux`
`npm install --save react-router-dom`
`npm install --save redux-form`
`npm install --save axios`
`npm install --save react-intl`
`npm install --save enzyme enzyme-adapter-react-16 react-test-renderer`

## testing
- [Jest testing](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md#running-tests)
- `npm run test`
- `npm test` Jest will launch in the watch mode

### Focusing and Excluding Tests
You can replace `it()` with `xit()` to temporarily exclude a test from being executed.
Similarly, `fit()` lets you focus on a specific test without running any other tests.

### Coverage Reporting
Jest has an integrated coverage reporter that works well with ES6 and requires no configuration.
Run `npm test -- --coverage` (note extra `--` in the middle) to include a coverage report like this: