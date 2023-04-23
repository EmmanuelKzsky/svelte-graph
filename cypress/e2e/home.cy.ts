describe('Health checkup', () => {

  it('Home page is up and running', () => {
    cy.visit('http://127.0.0.1:5173')

    cy.contains("Snapstrat")
    cy.contains("Add Day Report").click()
    cy.contains("Add New Report")
    cy.contains("Save").click()
    cy.get('.table-row-report').should('have.length', 5)
  })
})
describe('Error of same report being added', () => {

  it('Should throw an error due to we already have added the same date report', () => {
    cy.visit('http://127.0.0.1:5173')

    cy.contains("Snapstrat")
    cy.get('.table-row-report').should('have.length', 5)
    cy.contains("Add Day Report").click()
    cy.contains("Add New Report")
    cy.contains("Save").click()
    cy.contains("Report already added")
  })
})