
/*This is demo for BDD*/

Feature: Motor Vehicle Stamp Duty Calculation

  Scenario: Calculate motor vehicle stamp duty successfully
    Given I navigate to the NSW stamp duty page
    When I click on the Check online button
    Then I should see the motor vehicle registration calculator page
    When I select Yes for passenger vehicle
    And I enter the vehicle purchase price as "45000"
    And I click on the Calculate button
    Then I should see the stamp duty popup with correct details