import { expect, Page } from '@playwright/test';
import { BasePage } from './basePage';

export class ChatsPage extends BasePage {

  private firstChatWindow = this.page.locator('//div[@data-item-index="0"]//div//a');

  async openFirstChat() {
    await this.firstChatWindow.click();
  }

  async expectGroupVisible(page: Page, groupName: string) {
  const container = page.getByTestId('chat-quick-message-container');
  const chip = container.getByRole('button', { name: groupName, exact: true });

  await chip.scrollIntoViewIfNeeded();
  await expect(chip).toBeVisible();
  }
}
