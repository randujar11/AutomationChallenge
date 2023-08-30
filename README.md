# Automation Challenge

This challenge consists of using Page Object Model with the language and automation framework of your choice. The project is expected to be well organised and using best programming practices. 

The application to test will be the contact list application: https://thinking-tester-contact-list.herokuapp.com/

These test cases are:

1. Login successful.
2. Add contacts.
3. Contact Details.

## Tools and technologies

* Javascript
* Cypress.io

## How to run the tests locally

### Pre-requisites

* Node.js needs to be installed

### installation

1. Clone the repo:
   ```sh
   git clone https://github.com/randujar11/AutomationChallenge.git
   ```
2. Install NPM packages: The dependencies are going to be installed (Cypress.io, Faker.js):
   ```sh
   npm install
   ```
<<<<<<< HEAD
3. Run the tests using the cypress Test Runner, Type on the terminal:
   ```sh
  npx cypress open
  ```
## Considerations
* The dessign pattern is the best cypress practices and combianation of POM.
* Data is created on `fixtures`.
* Features that are constantly reused are created as custom commands (Login) on `support/commands.js`.
* I was use two forms to login. 
=======
3. Run the tests using the Cypress Test Runner, Type on the terminal:
   ```sh
   npx cypress open
   ```
>>>>>>> 416524b9b153034d2164d65800c112b900bc5cf4

## Considerations
* The design pattern is the best cypress practices and combination of POM.
* Data is created on `fixtures`.
* Features constantly reused are created as custom commands (Login) on `support/commands.js`.
* I am using two forms to login.
  
## Acknowledgements
* [Cypress.io](https://www.cypress.io/).
