// import { Given, When, Then, After } from "@cucumber/cucumber";
// import { PlaywrightContext } from "../support/playwrightContext";
// import { MotorStampDutyPage } from "../pages/motorStampDuty.page";

// // Step definitions for Motor Stamp Duty Calculator feature, This is sample code to show how to use Cucumber with Playwright, we can modify it as per your needs.

// Given(
//   "I navigate to the NSW stamp duty page",
//   async function (this: PlaywrightContext): Promise<void> {
//     await this.launchBrowser();

//     // Store page object inside context (cleaner approach)
//     this.motorStampDutyPage = new motorStampDutyPage(this.page);

//     await this.motorStampDutyPage.navigate();
//     await this.page.waitForTimeout(22000); // Wait for 2 seconds to ensure the page loads completely
//   }
// );

// When(
//   "I click on the Check online button",
//   async function (this: PlaywrightContext): Promise<void> {
//     await this.motorStampDutyPage.clickCheckOnline();
//   }
// );

// Then(
//   "I should see the motor vehicle registration calculator page",
//   async function (this: PlaywrightContext): Promise<void> {
//     await this.motorStampDutyPage.verifyCalculatorPage();
//   }
// );

// When(
//   "I select Yes for passenger vehicle",
//   async function (this: PlaywrightContext): Promise<void> {
//     await this.motorStampDutyPage.selectPassengerVehicleYes();
//   }
// );

// When(
//   "I enter the vehicle purchase price as {string}",
//   async function (this: PlaywrightContext, amount: string): Promise<void> {
//     await this.motorStampDutyPage.enterVehicleAmount(amount);
//   }
// );

// When(
//   "I click on the Calculate button",
//   async function (this: PlaywrightContext): Promise<void> {
//     await this.motorStampDutyPage.clickCalculate();
//   }
// );

// Then(
//   "I should see the stamp duty popup with correct details",
//   async function (this: PlaywrightContext): Promise<void> {
//     await this.motorStampDutyPage.verifyPopupContents();
//   }
// );

// After(async function (this: PlaywrightContext): Promise<void> {
//   await this.closeBrowser();
// });
