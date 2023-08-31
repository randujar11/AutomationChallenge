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
3. Run the tests using the Cypress Test Runner, Type on the terminal:
   ```sh
  npx cypress open
  ```
## Considerations
* The design pattern is the best cypress practices and combinations of POM.
* Data is created on `fixtures`.
* Features that are constantly reused are created as custom commands (Login) on `support/commands.js`.
* I was using two forms to login. 
  
## Acknowledgements
* [Cypress.io](https://www.cypress.io/).
