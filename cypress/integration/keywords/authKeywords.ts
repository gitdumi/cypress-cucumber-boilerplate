/// <reference types="cypress"/>

import { Given, Then, When } from "cypress-cucumber-preprocessor/steps";
import pageNavigation from "../common/pageNavigation";


Given('that the {string} user is logged in', (user, page) => {
  login(user)
})

Given('that the {string} user is on the {string} page', (user, page) => {
  login(user)
  pageNavigation.navigate(page)
})

var login = function (user: string): void {
  switch (user) {
    case 'admin':
      cy.login(Cypress.env('users').admin)
      break
    default:
      cy.log('User type undefined in authSteps.js')
  }
  cy.visit('/')
}


