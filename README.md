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
4. Select the option E2E Testing:
   ![step1](https://github.com/randujar11/AutomationChallenge/assets/20642003/18b4bf48-20e3-49cd-84e1-ba7659690e58)
   
5.  Choose a browser and click on Start E2E Testing:
   ![step2](https://github.com/randujar11/AutomationChallenge/assets/20642003/a4056edf-82fe-4993-baa3-90bb896350b4)

6. Choose de test:
   ![step3](https://github.com/randujar11/AutomationChallenge/assets/20642003/658fd087-0578-4973-bc03-1e9377f62b66)

## Considerations
* The design pattern is the best cypress practices and combination of POM.
* Data is created on `fixtures`.
* Features constantly reused are created as custom commands (Login) on `support/commands.js`.
* I am using two forms to login.
* 
## Acknowledgements
* [Cypress.io](https://www.cypress.io/).
