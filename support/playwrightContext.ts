import { setWorldConstructor, World } from "@cucumber/cucumber";
import { chromium, Browser, Page } from "playwright";
import { motorStampDutyPage } from "../pages/motorStampDuty.page";

export class PlaywrightContext extends World {
  browser!: Browser;
  page!: Page;
  motorStampDutyPage!: motorStampDutyPage;

async launchBrowser(): Promise<void> {
  this.browser = await chromium.launch({
    headless: false,   // 👈 MUST be false
    slowMo: 100        // optional (slows actions so you can see them)
  });

  this.page = await this.browser.newPage();
}

  async closeBrowser() {
    await this.browser.close();
  }
}

setWorldConstructor(PlaywrightContext);