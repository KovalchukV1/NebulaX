import { expect } from '@playwright/test';
import { BaseComponent } from './baseComponent';

export class HeaderMenuComponent extends BaseComponent {

  private profileBtn = this.page.locator('//div[contains(@class,"user-profile")]'); 
  private settingsItem = this.page.locator('//div[contains(text(),"Settings")]');
  private startWorkBtn = this.page.locator('//button[contains(@class,"start-work-button")]');
  private userMenuDropdownToggle = this.page.locator('//button[@data-testid="app-bar-open-popover"]');
  private userSettingsBtn = this.page.locator('//span[text()="Settings"]');

  async openUserMenu() {
    await this.userMenuDropdownToggle.click();
  }

  async openUserSettings() {
    await this.userMenuDropdownToggle.click();
    await this.userSettingsBtn.click();
  }

  async expectLoggedIn() {
    await expect(this.startWorkBtn).toBeVisible();
  }

  async openSettings() {
    await this.profileBtn.click();
    await this.settingsItem.click();
  }
}
