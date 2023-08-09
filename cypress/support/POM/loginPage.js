
class loginPage {

    title(){
        return cy.get('h1');
    }

    email(){
        return cy.get('#email');
    }

    password(){
        return cy.get('#password');
    }

    clickOnSubmit(){
        return cy.get('#submit');
    }
}

export const login = new loginPage;