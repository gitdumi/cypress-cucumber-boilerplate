@regression
Feature: API Test Example

    @smoke @sanity @api
    Scenario: API test
        Given that the "admin" user is logged in
        When the user makes a GET request
        Then the user finds that the response is in the correct format