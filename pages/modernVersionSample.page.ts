// import { Page, expect } from "@playwright/test";

// export const motorStampDutyPage = (page: Page) => ({

//   navigate: async () => {
//     await page.goto(
//       "https://www.service.nsw.gov.au/transaction/check-motor-vehicle-stamp-duty"
//     );
//   },

//   clickCheckOnline: async () => {
//     await page
//       .getByRole("button", { name: "Check online. External website" })
//       .click();
//   },

//   verifyCalculatorPage: async () => {
//     await expect(
//       page.getByRole("heading", { name: "Revenue NSW calculators" })
//     ).toBeVisible();
//   },

//   selectPassengerVehicleYes: async () => {
//     await page.waitForLoadState("networkidle");
//     await page.locator("#passenger").waitFor({ state: "visible" });
//     await page.locator('label[for="passenger_Y"]').click();
//   },

//   enterVehicleAmount: async (amount: string) => {
//     await page.locator("#purchasePrice").fill(amount);
//   },

//   clickCalculate: async () => {
//     await page.getByRole("button", { name: "Calculate" }).click();
//   },

//   verifyPopupContents: async () => {
//     await expect(page.getByText("Calculation")).toBeVisible();
//     await expect(page.getByText("Purchase price or value").first()).toBeVisible();
//     await expect(page.getByText("Duty payable")).toBeVisible();

//     const purchasePriceRow = page
//       .locator("table tbody tr")
//       .filter({ hasText: "Purchase price or value" });

//     const dutyPayableRow = page
//       .locator("table tbody tr")
//       .filter({ hasText: "Duty payable" });

//     await expect(purchasePriceRow).toContainText("$45,000.00");
//     await expect(dutyPayableRow).toContainText("$1,350.00");
//   }

// });
