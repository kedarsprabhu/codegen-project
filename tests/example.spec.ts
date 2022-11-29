import { test, expect,chromium } from '@playwright/test';
const psi = require('psi');

test('test', async ({ page }) => {
  await page.goto('https://my-qastg.mheducation.com/login');
  await page.getByLabel('Username or Email').click();
  await page.getByLabel('Username or Email').fill('autobots.automation');
  await page.getByLabel('Username or Email').dblclick({
    modifiers: ['Control']
  });
  await page.getByLabel('Password').click();
  await page.getByLabel('Password').fill('Passpass1');
  await page.getByRole('button', { name: 'Log In' }).click();
  await page.waitForTimeout(2000);
  
  const { data } = await psi('https://my-qastg.mheducation.com/login');
  console.log('Speed score:', data.lighthouseResult.categories.performance.score);

  // Output a formatted report to the terminal
  await psi.output('https://my-qastg.mheducation.com/login');
  console.log('Done');

  // Supply options to PSI and get back speed
  const data2 = await psi('https://my-qastg.mheducation.com/login', {
    nokey: 'true',
    strategy: 'desktop'
  });
  console.log('Speed score:', data2.data.lighthouseResult.categories.performance.score);



//   await page.goto('https://my-qastg.mheducation.com/secure/teacher/urn:com.mheducation.openlearning:enterprise.identity.organization:qastg.global:organization:2315359b-1a82-47b7-90d6-c33b61602fd6/home');
//   await page.getByRole('link', { name: 'Sridhar Class' }).click();
//   await page.getByRole('heading', { name: 'Dashboard' }).click({
//     button: 'right'
//   });
//   await page.getByRole('link', { name: 'Search for Resources' }).click();
//   await page.getByRole('button', { name: 'Resource Type' }).click();
//   await page.getByRole('button', { name: 'Show More Resource Types' }).click();
//   await page.locator('span').filter({ hasText: 'Rubric' }).nth(1).click();
//   await page.locator('mhe-asset').filter({ hasText: 'Click to open and play Rubric asset test Rubric asset test Rubric' }).locator('mhe-dropdown').getByRole('button').click();
//   await page.getByRole('option', { name: 'Preview' }).click();
//   await page.getByRole('heading', { name: 'Rubric asset test' }).click({
//     button: 'right'
//   });
//   await page.getByRole('banner').locator('div').first().click();
//   await page.frameLocator('#launch_frame_2').getByRole('heading', { name: 'Rubric Created for Demo' }).click({
//     button: 'right'
//   });
//   console.log('got header');
//   await page.frameLocator('#launch_frame_2').getByRole('button', { name: 'Open Full Screen' }).click();
//   await page.frameLocator('#launch_frame_2').getByRole('button', { name: 'Exit Full Screen' }).click();
//   const [page1] = await Promise.all([
//     page.waitForEvent('popup'),
//     page.getByRole('button', { name: 'Open in new tab' }).click()
//   ]);
//   await page.getByRole('button', { name: 'Close Player' }).click();
//   await page.getByRole('button', { name: 'Account Settings' }).click();
//   await page.getByRole('link').filter({ hasText: 'Logout' }).click();
//   console.log("test case");
});