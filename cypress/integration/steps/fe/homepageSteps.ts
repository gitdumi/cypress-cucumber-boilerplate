/// <reference types="cypress"/>

import homePage from '../../pages/homepage'

export class HomepageSteps {

    faker = require('faker')

    addToDo() {
        var name: string = this.faker.name.findName()
        homePage.createTodo(name)
        cy.wrap(name).as('createdToDo')
    }

    //Asserts

    assertHomepage() {
        homePage.assertTitle('todos')
        homePage.assertInputField('be.visible')
    }

    assertToDoCreation() {
        cy.get('@createdToDo').then((s) => {
            homePage.assertCreatedTodo(s, 0)
        })
    }

}

const homepageSteps = new HomepageSteps()

Object.freeze(homepageSteps)

export default homepageSteps