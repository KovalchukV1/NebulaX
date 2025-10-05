import { Page, expect } from '@playwright/test';

export abstract class BasePage {
  constructor(protected page: Page) {}
  
  public path = '';

  async navigate() {
    await this.page.goto(this.path);
  }

  async assertURL() {
    await expect(this.page.url()).toContain(this.path);
  }
}
