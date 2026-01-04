import { test, expect, devices } from '@playwright/test';

test.use({
  ...devices['iPhone 15'],
});

test('test', async ({ page }) => {
  await page.goto('https://testautomationpractice.blogspot.com/?m=1');
  await page.getByRole('textbox', { name: 'Enter Name' }).click();
  await page.getByRole('textbox', { name: 'Enter Name' }).fill('hu');
  await page.getByRole('textbox', { name: 'Enter EMail' }).click();
  await page.getByRole('textbox', { name: 'Enter Name' }).fill('hujh');
  await page.getByRole('textbox', { name: 'Enter EMail' }).fill('jh');
  await page.getByRole('textbox', { name: 'Enter EMail' }).press('Tab');
  await page.getByRole('textbox', { name: 'Enter Phone' }).press('ArrowDown');
  await page.getByRole('textbox', { name: 'Enter Phone' }).press('ArrowDown');
  await page.getByRole('heading', { name: 'GUI Elements' }).click();
  await page.getByRole('textbox', { name: 'Enter Phone' }).press('ArrowDown');
  await page.locator('body').press('ArrowDown');
  await page.locator('body').press('ArrowDown');
  await page.locator('body').press('ArrowDown');
  await page.locator('body').press('ArrowDown');
  await page.locator('body').press('ArrowDown');
  await page.locator('body').press('ArrowDown');
  await page.locator('body').press('ArrowDown');
  await page.locator('body').press('ArrowDown');
  await page.locator('body').press('ArrowDown');
  await page.locator('#post-body-1307673142697428135 div').filter({ hasText: 'Friday' }).nth(1).click();
  await page.getByText('Form Elements Name: Email:').click();
  await page.getByLabel('Sorted List:').selectOption('cat');
  await page.getByLabel('Country:').selectOption('india');
  await page.getByLabel('Sorted List:').selectOption('cheetah');
  await page.locator('#datepicker').click();
  await page.getByRole('link', { name: '29' }).click();
  await page.locator('#txtDate').click();
  await page.getByRole('link', { name: '28' }).click();
  await page.getByText('Date Picker 2 (dd/mm/yyyy) :').click();
  await page.locator('body').press('ArrowDown');
  await page.locator('#txtDate').press('ArrowDown');
  await page.locator('#txtDate').press('ArrowDown');
  await page.locator('#txtDate').press('ArrowDown');
  await page.locator('#txtDate').press('ArrowDown');
  await page.locator('#main').click();
  await page.locator('body').press('ArrowDown');
  await page.locator('body').press('ArrowDown');
  await page.locator('body').press('ArrowDown');
  await page.locator('body').press('ArrowDown');
  await page.locator('body').press('ArrowDown');
  await page.locator('body').press('ArrowDown');
  await page.locator('body').press('ArrowDown');
  await page.locator('body').press('ArrowDown');
  await page.locator('#singleFileInput').click();
  await page.getByRole('button', { name: 'Upload Single File' }).click();
  await page.locator('#singleFileInput').click();
  await page.locator('#multipleFilesInput').click();
  await page.getByRole('cell', { name: 'Learn Selenium' }).click();
});