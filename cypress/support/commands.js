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
import { login } from "../support/POM/loginPage";
import { contact } from "../support/POM/contactListPage";

 Cypress.Commands.add("login", (email, password) => {
      cy.visit('/')
      login.email().type(email)
      login.password().type(password)
      login.clickOnSubmit().click()
      contact.title().should('be.visible')
      contact.addContact().should('be.visible')
 })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })
