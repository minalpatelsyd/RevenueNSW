import { test } from "../fixtures/module";

// Using Cucumber-style naming for clarity
test.describe("Motor Vehicle Stamp Duty Calculator", () => {

  test("Calculate motor vehicle stamp duty successfully", async ({ motorStampDutyPage }) => {

    // Given I navigate to the NSW stamp duty page
    await test.step("Given I navigate to the NSW stamp duty page", async () => {
      await motorStampDutyPage.navigate();
    });

    // When I click on the Check online button
    await test.step("When I click on the Check online button", async () => {
      await motorStampDutyPage.clickCheckOnline();
    });

    // Then I should see the motor vehicle registration calculator page
    await test.step("Then I should see the motor vehicle registration calculator page", async () => {
      await motorStampDutyPage.verifyCalculatorPage();
    });

    // When I select Yes for passenger vehicle
    await test.step("When I select Yes for passenger vehicle", async () => {
      await motorStampDutyPage.selectPassengerVehicleYes();
    });

    // And I enter the vehicle purchase price
    await test.step('And I enter the vehicle purchase price as "45000"', async () => {
      await motorStampDutyPage.enterVehicleAmount("45000");
    });

    // And I click on the Calculate button
    await test.step("And I click on the Calculate button", async () => {
      await motorStampDutyPage.clickCalculate();
    });

    // Then I should see the stamp duty popup with correct details
    await test.step("Then I should see the stamp duty popup with correct details", async () => {
      await motorStampDutyPage.verifyPopupContents();

     
    });
  });
});
