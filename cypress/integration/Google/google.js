import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';

const url = 'https://google.com';
Given('I open Google page', () => {
	cy.visit(url)
})

When('I search toto', () => {
	cy.get('input[type=search]').type('toto')
})

Then('I find www.toto.fr website', () => {
	cy.get('cite').find('www.toto.fr')
})
