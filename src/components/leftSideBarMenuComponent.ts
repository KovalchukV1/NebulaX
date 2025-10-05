import { expect } from '@playwright/test';
import { BaseComponent } from './baseComponent';

export class LeftSideBarMenuComponent extends BaseComponent {
  private chatsBtn = this.page.locator(`//span[text() = 'Chats']`);
  private showMenuBtn = this.page.locator(`//*[local-name()='svg' and @data-testid='MenuIcon']`);

  async openChats() {
    await this.chatsBtn.click();
    await expect(this.page).toHaveURL(/\/chat\/?$/);
  }

  async showMenu() {
    await this.showMenuBtn.click();
  }
}
