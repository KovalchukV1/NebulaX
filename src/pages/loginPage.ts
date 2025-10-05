import { expect, Page } from '@playwright/test';
import { BasePage } from './basePage';

export class LoginPage extends BasePage {

  private emailInputField = this.page.locator('//input[@name="email"]');
  private passwordInputField = this.page.locator('//input[@name="password"]');
  private signInBtn = this.page.locator('//button[@data-testid="login-submit-button"]//span');
  private welcomeTitle = this.page.locator('//p[text() = "Welcome back!"]');

  async welcomeTitleIsVisible() {
    await expect(this.welcomeTitle).toBeVisible();
  }

  async login(email: string, password: string) {
    await this.navigate();
    await this.welcomeTitleIsVisible();
    await this.emailInputField.fill(email);
    await this.passwordInputField.fill(password);
    await this.signInBtn.click();
  }
}
