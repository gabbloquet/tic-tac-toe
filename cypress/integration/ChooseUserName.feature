Feature: Choose user name

  We want the user to be able to enter the names of the players.

  Background:
    User is connected on the application.

  @focus
  Scenario:
    Given the user is on homepage
    When the user enters his username
    And the user enters that of his partner
    And the user clicks on GO button
    Then the game starts
    And the names of both players are displayed
    And it's the first player's turn to play
