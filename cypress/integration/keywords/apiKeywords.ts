/// <reference types="cypress"/>

import { Given, Then, When } from "cypress-cucumber-preprocessor/steps";
import apiSteps from "../steps/api/apiSteps";

//Given

//When

When('the user makes a GET request', () => {
    apiSteps.getRequestExample()
})

//Then

Then('the user finds that the response is in the correct format', () => {
    apiSteps.assertGetRequestExample()
})
