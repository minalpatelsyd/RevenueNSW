import { test as base } from "@playwright/test";
import { MotorStampDutyPage } from "../pages/motorStampDuty.page";

type MyFixtures = {
  motorStampDutyPage: MotorStampDutyPage;
};

// Extend Playwright test to include motorStampDutyPage fixture
export const test = base.extend<MyFixtures>({
  motorStampDutyPage: async ({ page }, use) => {
    const motorPage = new MotorStampDutyPage(page);
    await use(motorPage);
  },
});

export { expect } from "@playwright/test";
