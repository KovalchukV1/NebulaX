import { test } from '@playwright/test';
import { LoginPage } from '../../src/pages/loginPage';
import { HeaderMenuComponent } from '../../src/components/headerMenuComponent';
import { LeftSideBarMenuComponent } from '../../src/components/leftSideBarMenuComponent';
import { SettingsPage } from '../../src/pages/settingsPage';
import { ChatsPage } from '../../src/pages/chatsPage';

const EMAIL = process.env.USERNAME!;
const PASS  = process.env.PASSWORD!;

test('Verify Script Group Functionality in NebulaX', async ({ page }) => {
  const loginPage   = new LoginPage(page);
  const headerMenuComponent  = new HeaderMenuComponent(page);
  const leftSidebarMenuComponent = new LeftSideBarMenuComponent(page);
  const settingPage = new SettingsPage(page);
  const chatsPage = new ChatsPage(page);
  
  const newGroupUniqueName = `Test Group111_${Date.now()}`;

  await loginPage.login(EMAIL, PASS);
  await headerMenuComponent.openUserSettings();
  await headerMenuComponent.checkUrlPart('quick-messages');
  await settingPage.addNewGroup(newGroupUniqueName);
  await leftSidebarMenuComponent.showMenu();
  await leftSidebarMenuComponent.openChats();
  await headerMenuComponent.checkUrlPart('chat');
  await chatsPage.openFirstChat();
  await chatsPage.expectGroupVisible(page, newGroupUniqueName);
});
