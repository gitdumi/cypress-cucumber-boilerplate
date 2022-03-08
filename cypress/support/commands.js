// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --

Cypress.Commands.add('login', (object) => {
    cy.log(object)
    cy.request({
        method: 'POST',
        url: `https://restful-booker.herokuapp.com/auth`,
        headers: {
            'content-type': 'application/json'
        },
        body: {
            username: `${object.username}`,
            password: `${object.password}`
        },
    }).then(response => {
        expect(response.status).to.equal(200)
        expect(response.body.token).to.not.be.null
        
        //This is for demonstration purposes only.
        //Depending on your application, you will have to handle the login with an API 
        //  and then set correct tokens in localstorage to handle the user login
        window.localStorage.setItem('bearerToken', response.body.token);
    });

});

// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
