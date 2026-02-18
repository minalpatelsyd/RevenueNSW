// import { Page, expect } from "@playwright/test";

// const stampDutyUrl = "https://www.service.nsw.gov.au/transaction/check-motor-vehicle-stamp-duty";
// const checkOnlineButton = (page: Page) => page.getByRole('button', { name: 'Check online. External website' });
// const calculatorHeader = (page: Page) => page.getByRole('heading', { name: 'Revenue NSW calculators' });
// const passengerVehicleYesOption = (page: Page) => page.getByRole('radio', { name: /yes/i });   
// const vehicleAmountInput = (page: Page) => page.locator('#purchasePrice');
// const calculateButton = (page: Page) => page.getByRole('button', { name: 'Calculate' });
// const popupHeader = (page: Page) => page.locator("text=Calculation");
// const purchasePriceLabel = (page: Page) => page.locator("text=Purchase price or value").first();
// const dutyPayableLabel = (page: Page) => page.locator("text=Duty payable");
// const purchasePriceRow = (page: Page) => page.locator('table tbody tr').filter({ hasText: 'Purchase price or value' });
// const dutyPayableRow = (page: Page) => page.locator('table tbody tr').filter({ hasText: 'Duty payable' });

// export const motorStampDutyPage = (page: Page) => ({
//   navigate: async () => {
//     await page.goto(stampDutyUrl);
//   },

//   clickCheckOnline: async () => {
//     await checkOnlineButton(page).click();
//   },

//   verifyCalculatorPage: async () => {
//     await expect(
//       calculatorHeader(page)
//     ).toBeVisible();
//   },

//   selectPassengerVehicleYes: async () => {
//     await page.waitForLoadState("networkidle");
//     await page.locator("#passenger").waitFor({ state: "visible" });
//     await passengerVehicleYesOption(page).click();
//   },

//   enterVehicleAmount: async (amount: string) => {
//     await vehicleAmountInput(page).fill(amount);
//   },

//   clickCalculate: async () => {
//     await calculateButton(page).click();
//   },

//   verifyPopupContents: async () => {
//     await expect(popupHeader(page)).toBeVisible();
//     await expect(purchasePriceLabel(page)).toBeVisible();
//     await expect(dutyPayableLabel(page)).toBeVisible();

 

//     await expect(purchasePriceRow(page)).toContainText("$45,000.00");
//     await expect(dutyPayableRow(page)).toContainText("$1,350.00");
//   }

// });
