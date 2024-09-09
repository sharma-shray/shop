const { test, expect } = require('@playwright/test');


test('Check header elements exist', async ({ page }) => {
    await page.goto('http://localhost:8081/cart');
  
    const header = page.locator('app-header#header');
    await expect(header).toBeVisible();
  
    // Check if the logo exists
    const logo = header.locator('.logo a[aria-label="SHOP Home"]');
    await expect(logo).toBeVisible();
    await expect(logo).toHaveText('SHOP');
  
    // Check if the shopping cart button exists
    const cartButton = header.locator('.cart-btn-container paper-icon-button[icon="shopping-cart"]');
    await expect(cartButton).toBeVisible();
  });