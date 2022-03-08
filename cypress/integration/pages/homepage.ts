import { PageUrl } from "../../support/enums";

class HomePage {


    //// --- Locators 

    pageTitle = 'h1'
    inputField = 'input.new-todo'
    todoList = 'ul.todo-list'
    todoCount = 'span.todo-count strong'

    //// --- Page actions

    navigate() {
        cy.visit(PageUrl.HOMEPAGE)
    }

    createTodo(text: string): void {
        cy.get(this.inputField).type(text + '{enter}')
    }

    //// --- Asserts

    assertTitle(text: string): void {
        cy.get(this.pageTitle).should('have.text', text)
    }

    assertInputField(assertion: string) {
        cy.get(this.inputField).should(assertion)
    }

    assertCreatedTodo(text, index: number): void {
        cy.get(this.todoList).should('have.length.greaterThan', 0)
        cy.get(this.todoList).eq(index).should('be.visible')
        cy.get(this.todoList).eq(index).find('label').should('have.text', text)
        cy.get(this.todoCount).should('have.text', 1)
    }
}

const homePage: HomePage = new HomePage()

Object.freeze(homePage)

export default homePage
