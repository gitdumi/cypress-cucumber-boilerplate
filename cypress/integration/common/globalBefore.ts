before(() => {
  //Implement any code you would want to execute before all tests

  cy.log(
    "Starting tests on " + (String) (Cypress.env('envName')).toUpperCase()
  )
})