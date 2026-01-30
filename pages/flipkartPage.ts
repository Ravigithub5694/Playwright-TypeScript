import { Page } from '@playwright/test';

export class FlipkartPage {
  private page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async navigateToHome() {
    await this.page.goto('https://www.flipkart.com/');
  }

  async searchForProduct(product: string) {
    await this.page.getByRole('textbox', { name: 'Search for Products, Brands' }).fill(product);
    await this.page.getByRole('button', { name: 'Search for Products, Brands' }).click();
  }

  async verifyProductInList(product: string) {
    await this.page.locator(`text=${product}`).first().waitFor({ state: 'visible' });
  }
}