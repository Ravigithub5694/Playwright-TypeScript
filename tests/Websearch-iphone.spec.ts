import { test, expect } from '@playwright/test';
import { FlipkartPage } from '../pages/flipkartPage';

test('Search for I phone and verify iPhone 16 is in the list', async ({ page }) => {
  const flipkartPage = new FlipkartPage(page);

  // Navigate to Flipkart
  await flipkartPage.navigateToHome();

  // Search for "I phone"
  await flipkartPage.searchForProduct('I phone');

  // Verify if "iPhone 16" is in the list
  await flipkartPage.verifyProductInList('iPhone 16');
});