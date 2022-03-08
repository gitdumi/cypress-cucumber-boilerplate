/// <reference types="cypress"/>

export class ApiSteps {

    getRequestExample(): void {
        cy.request({
            method: 'GET',
            url: `https://restful-booker.herokuapp.com/booking`
        }).as('getResponse')
    }

    //Example of incercepting a browser GET request. This method must be executed before the browser will make the request
    interceptGetRequest(url): void {
        cy.intercept({
            method: 'GET',
            url: url
        }).as(url)
    }

    //This method is used to obtain the response of the intercepted request
    invokeGetRequestResponse(url) {
        return cy.wait(`@${url}`).then((interception) => {
            return interception.response.body
        })
    }


    //// --- Asserts

    assertGetRequestExample() {
        cy.get('@getResponse').then((response: any) => {
            cy.log(response)
            expect(response.status).to.equal(200)
            expect(response.headers['content-type']).to.contain('application/json')
            expect(response.body[0]).to.have.property('bookingid').and.be.a('number')
        })
    }
}

const apiSteps = new ApiSteps()

Object.freeze(apiSteps)

export default apiSteps