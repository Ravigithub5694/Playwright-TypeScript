import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://testautomationpractice.blogspot.com/');
  await page.getByRole('heading', { name: 'Automation Testing Practice' }).click();
  await page.getByText('For Selenium, Cypress &').click();
  await page.locator('#Wikipedia1_wikipedia-search-input').click();
  await page.locator('#Wikipedia1_wikipedia-search-input').fill('fff');
  await page.locator('#Wikipedia1_wikipedia-search-input').press('ArrowDown');
  await page.getByText('Tabs Search results Dynamic').click();
  await page.locator('body').press('ArrowDown');
  page.once('dialog', dialog => {
    console.log(`Dialog message: ${dialog.message()}`);
    dialog.dismiss().catch(() => {});
  });
  await page.getByRole('button', { name: 'Confirmation Alert' }).click();
  await page.getByRole('button', { name: 'Confirmation Alert' }).press('ArrowDown');
  await page.getByRole('button', { name: 'Confirmation Alert' }).press('ArrowDown');
  await page.getByRole('button', { name: 'Confirmation Alert' }).press('ArrowDown');
  await page.getByRole('button', { name: 'Confirmation Alert' }).press('ArrowDown');
  await page.getByRole('button', { name: 'Confirmation Alert' }).press('ArrowDown');
  await page.getByRole('button', { name: 'Confirmation Alert' }).press('ArrowDown');
  await page.getByRole('button', { name: 'Point Me' }).click();
  await page.getByText('Move the mouse over the button to open the dropdown menu. Point Me Mobiles').click();
  await page.locator('body').press('ArrowDown');
  await page.locator('body').press('ArrowDown');
  await page.locator('body').press('ArrowDown');
  await page.locator('body').press('ArrowDown');
  await page.locator('body').press('ArrowDown');
  await page.locator('body').press('ArrowDown');
  await page.locator('body').press('ArrowDown');
  await page.locator('body').press('ArrowDown');
  await page.getByText('Drag me to my target').click();
  await page.getByRole('heading', { name: 'Slider' }).click();
});