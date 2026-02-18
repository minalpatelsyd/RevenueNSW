import { Page, Locator, expect } from "@playwright/test";

export class MotorStampDutyPage {

  private readonly stampDutyUrl = 
    "https://www.service.nsw.gov.au/transaction/check-motor-vehicle-stamp-duty";

  private readonly checkOnlineButton: Locator;
  private readonly calculatorHeader: Locator;
  private readonly passengerVehicleYesOption: Locator;
  private readonly vehicleAmountInput: Locator;
  private readonly calculateButton: Locator;
  private readonly popupHeader: Locator;
  private readonly purchasePriceLabel: Locator;
  private readonly dutyPayableLabel: Locator;
  private readonly purchasePriceValueRow: Locator;
  private readonly dutyPayableRow: Locator;

  constructor(private page: Page) {

    this.checkOnlineButton = page.getByRole('button', { 
      name: 'Check online. External website' 
    });

    this.calculatorHeader = page.getByRole('heading', { name: 'Revenue NSW calculators' });
    this.passengerVehicleYesOption =  page.getByRole('radio', { name: /yes/i });
    this.vehicleAmountInput = page.locator('#purchasePrice');
    this.calculateButton = page.getByRole('button', { name: 'Calculate' });
    this.popupHeader = page.locator("text=Calculation");
    this.purchasePriceLabel = page.locator("text=Purchase price or value").first();
    this.dutyPayableLabel = page.locator("text=Duty payable");
    this.purchasePriceValueRow = page.locator('table tbody tr').filter({ hasText: 'Purchase price or value' });
    this.dutyPayableRow = page.locator('table tbody tr').filter({ hasText: 'Duty payable' });
  }

  async navigate() {
    await this.page.goto(this.stampDutyUrl);
  }

  async clickCheckOnline() {
    await this.checkOnlineButton.click();
  }

   async selectPassengerVehicleYes() {
    await this.page.waitForLoadState('networkidle');
    await this.page.locator('#passenger').waitFor({ state: 'visible' });
    await this.page.locator('label[for="passenger_Y"]').click();

  }

  async enterVehicleAmount(amount: string) {
    await this.vehicleAmountInput.fill(amount);
  }

  async clickCalculate() {
    await this.calculateButton.click();
  }

  async verifyCalculatorPage() {
    await expect(this.calculatorHeader).toBeVisible();
  } 

  


  async verifyPopupContents() {
    await expect(this.popupHeader).toBeVisible();
    await expect(this.purchasePriceLabel).toBeVisible();
    await expect(this.dutyPayableLabel).toBeVisible();
     expect(await this.purchasePriceValueRow.textContent()).toContain("$45,000.00");
      expect(await this.dutyPayableRow.textContent()).toContain("$1,350.00");
  }
}
