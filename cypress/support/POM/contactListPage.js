class contactList {

    title(){
        return cy.get('h1')
     }

     addContact(){
        return cy.get('#add-contact')
     }

     logout(){
        return cy.get('#logout')
     }

     contactTable(){
      return cy.get('#myTable').find('.contactTableBodyRow')
   }
}

export const contact = new contactList;