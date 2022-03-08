# Cypress Cucumber Boilerplate

BDD Test Automation framework using Cypress, Typescript, Cucumber

Cypress documentation: https://docs.cypress.io/

## Installation

1. Install npm and node.js
2. Install project dependencies using:

```
$ npm install
```

## Configuration

Configure users, credentials and baseUrls in individual .json files found in the ./config directory. 

### Structure:

The cypress/fixtures directory is used to store test data and can be accessed using cy.fixture('fileName')

In the cypress/integration directory you can find the test files.

- features (.feature file definitions)
    - keywords (implementations of keywords from the feature files)
        - steps (.ts files which implement logic from page objects or HTTP requests)
            - pages (page objects storing locators and functions to interact with or make assertions on specific pages)

The cypress/support and cypress/plugins directory contains custom commands, plugins and enums used by the application. Refer to cypress documentation for  more info.

The cucumber-html-report.ts file is the script that handles generating the html report.

The help/examples directory shows multiple examples provided by the Cypress documentation for test logic, covering most of the features.

Two test examples have been implemented, found in cypress/integration/features. One is an API test that also handles the login and displays an example of passing the bearer token in the cookies (this will be different for each application), which will later handle the logged in user

## How to run

Configured scripts are found in the package.json file

Scripts can be run using:
```
$ npm run {scriptName}
```

### Examples:

#### Open cypress using UI and run tests manually
```
$ npm run cypress:open:qa
```

#### Open cypress in headless mode and use cucumber tags
```
$ npm run cypress:qa:smoke:fe
$ npm run cypress:qa:regression
```
Reports are generated in cypress/reports/cucumber-html-report in html format. Screenshots for failed steps are also found in the cypress/reports folder.

