/// <reference types="cypress"/>

import { PageUrl } from "../../support/enums";


export class PageNavigation {
  navigate(pageUrl: string) {
    cy.visit(pageUrl)
  }

}

const pageNavigation = new PageNavigation()

Object.freeze(pageNavigation)

export default pageNavigation