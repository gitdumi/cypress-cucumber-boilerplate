/// <reference types="cypress"/>

import { Given, Then, When } from "cypress-cucumber-preprocessor/steps";
import pageNavigation from "../common/pageNavigation";
import { PageUrl } from "../../support/enums";
import homepageSteps from "../steps/fe/homepageSteps";

//Given

Given('that the user is on the homepage', () => {
    pageNavigation.navigate(PageUrl.HOMEPAGE)
}) 

//When

When('the user adds a to do', () => {
    homepageSteps.addToDo()
})

//Then

Then('the user finds that the to do was added correctly', () => {
    homepageSteps.assertToDoCreation()
})
