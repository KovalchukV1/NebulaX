import { expect, Page } from '@playwright/test';
import { BasePage } from './basePage';

export class SettingsPage extends BasePage {

  private addGroupBtn = this.page.locator('//button[text()="Add group"]');
  private groupTitleField = this.page.locator('//input[@name="title"]');
  private firstScriptField = this.page.locator('//textarea[@name="messages.0.message"]');
  private saveNewGroupBtn = this.page.locator('//button[@type="submit" and text()="Save"]');
  private successfullyGroupCreatedMsg = this.page.locator('//p[text()="The group was created successfully."]');

  async addNewGroup(groupTitle: string) {
    await this.addGroupBtn.click();
    await this.groupTitleField.fill(groupTitle);
    await this.firstScriptField.fill('test script');
    await this.saveNewGroupBtn.click();
    await expect(this.successfullyGroupCreatedMsg).toBeVisible();
    await expect(this.successfullyGroupCreatedMsg).not.toBeVisible({ timeout: 15000 });
  }
}
