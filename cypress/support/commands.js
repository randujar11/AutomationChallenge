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

 Cypress.Commands.add("getAPI", (url,headrs) => {

     cy.request({
          method: 'GET',
          url: url,
          headers: headrs
     })
 })

 Cypress.Commands.add("postAPI", (url,headrs, payload) => {

     cy.request({
          method: 'POST',
          url: url,
          headers: headrs,
          body: payload
     })
 })

 Cypress.Commands.add("putAPI", (url,headrs) => {

     cy.request({
          method: 'PUT',
          url: url,
          headers: headrs
     })
 })

 Cypress.Commands.add("deleteAPI", (url,headrs) => {

     cy.request({
          method: 'DELETE',
          url: url,
          headers: headrs
     })
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
