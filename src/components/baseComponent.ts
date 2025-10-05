import { expect, Page } from '@playwright/test';

export abstract class BaseComponent {
  constructor(protected readonly page: Page) {}

  async checkUrlPart(part: string) {
    await this.page.waitForLoadState('domcontentloaded');
    await expect(this.page).toHaveURL(new RegExp(part));
  }
}
