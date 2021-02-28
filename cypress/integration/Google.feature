Feature: Find something

  I want to make a reasearch and have at least a result.

  @focus
  Scenario: Opening a search engine page
    Given I open Google page
    When I search toto
    Then I find www.toto.fr website
