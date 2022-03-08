@fe @homepage @regression
Feature: Homepage

  @smoke @sanity
  Scenario: As a user I can access the homepage
    Given that the user is on the homepage
    When the user adds a to do
    Then the user finds that the to do was added correctly
