import { And, Given, When, Then } from "cypress-cucumber-preprocessor/steps";

const url = 'http://localhost:3000/';

const userOneUsername = 'Gabin'
const userTwoUsername = 'Flavian'

Given('the user is on homepage', () => {
  cy.visit(url)
})

When('the user enters his username', () => {
  cy.get('[data-cy=userOneUsername]').type(userOneUsername)
})

And('the user enters that of his partner', () => {
  cy.get('[data-cy=userTwoUsername]').type(userTwoUsername)
})

And('the user clicks on GO button', () => {
  cy.contains('Go').click()
})

Then('the game starts', () => {
  cy.get('[data-cy=gameGrid]').should('exist')
})

And('the names of both players are displayed', () => {
  cy.get(userOneUsername).should('exist');
  cy.get(userTwoUsername).should('exist');
})

And("it's the first player's turn to play", () => {
  cy.get('[data-cy=userTurn]').should('have.value', userOneUsername)
})
