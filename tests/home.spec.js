const { test, expect } = require('@playwright/test');

test('has title', async ({ page }) => {
    await page.goto('https://playwright.dev/');
  
    // Expect a title "to contain" a substring.
    await expect(page).toHaveTitle(/Playwright/);
  });

  test('content container element exists', async ({ page }) => {
    await page.goto('localhost:8081');
  
    // Check if the content container element exists
    const contentContainer = page.locator('#contentContainer');
    await expect(contentContainer).toBeTruthy();
  
    // Check if the slot element exists inside the content container
    const slot = contentContainer.locator('#slot');
    await expect(slot).toBeTruthy();
  });

  test('click on link redirects to mens outerwear page', async ({ page }) => {
    await page.goto('localhost:8081');
  
    // Click on the link
    const link = page.locator('a.image-link[href="/list/mens_outerwear"]');
    await link.click();
  
    // Check if the page redirects to the expected URL
    await expect(page.url()).toContain('/list/mens_outerwear');
  });

  test('click on shop now button redirects to mens outerwear page', async ({ page }) => {
    await page.goto('localhost:8081');
  
    // Click on the shop now button
    const button = page.locator('shop-button a[href="/list/mens_outerwear"]');
    await button.click();
  
    // Check if the page redirects to the expected URL
    await expect(page.url()).toContain('/list/mens_outerwear');
  });

  test('ladies outerwear item is displayed correctly', async ({ page }) => {
    await page.goto('localhost:8081');
  
    // Get the item element
    const item = page.locator('.item');
  
    // Verify the image link
    const imageLink = item.getByRole('link', { name: 'Ladies Outerwear', exact: true });
    await expect(imageLink).toHaveAttribute('href', '/list/ladies_outerwear');
  
    // Verify the image source
    const image = item.getByRole('link', { name: 'Ladies Outerwear', exact: true });
    const imageUrl = await image.getAttribute('style');

    // Verify the heading text
    const heading = item.getByRole('heading', { name: 'Ladies Outerwear' });
    await expect(heading).toHaveText('Ladies Outerwear');
  
    // Verify the shop button link
    const shopButton = item.getByLabel('Ladies Outerwear Shop Now');
    await expect(shopButton).toHaveAttribute('href', '/list/ladies_outerwear');
    await expect(shopButton).toHaveText('Shop Now');
  });

  test("men's t-shirts item is displayed correctly", async ({ page }) => {
    await page.goto('localhost:8081');
  
    // Get the item element
    const item = page.locator('.item');
  
    // Verify the image link
    const imageLink = item.getByRole('link', { name: 'Ments T-Shirts', exact: true });
  
    // Verify the image source
    const image = item.getByRole('link', { name: 'Men\'s T-Shirts', exact: true });
    const imageUrl = await image.getAttribute('style');

    // Verify the heading text
    const heading = item.getByRole('heading', { name: 'Men\'s T-Shirts' });
    await expect(heading).toHaveText("Men's T-Shirts");
  
    // Verify the shop button link
    const shopButton = item.getByLabel('Men\'s T-Shirts Shop Now');
    await expect(shopButton).toHaveAttribute('href', '/list/mens_tshirts');
    await expect(shopButton).toHaveText('Shop Now');
  });