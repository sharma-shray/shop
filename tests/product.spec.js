const { test, expect } = require('@playwright/test');

test('header element exists', async ({ page }) => {
    await page.goto('http://localhost:8081/list/mens_outerwear');
  
    const header = await page.$('header');
    expect(header).not.toBeNull();
  
    const h1 = await page.$('header > h1');
    expect(h1).not.toBeNull();
  
    //  text content of the h1 element is correct
    const h1Text = await h1.textContent();
    expect(h1Text).toBe('Men\'s Outerwear');
  
    //the span element exists within the header
    const span = await page.$('header > span');
    expect(span).not.toBeNull();
  
    //text content of the span element is correct
    const spanText = await span.textContent();
    expect(spanText).toBe('(16 items)');
  });

  
  test('first 5 elements exist', async ({ page }) => {
    await page.goto('http://localhost:8081/list/mens_outerwear');
  
    //the ul element exists
    const ul = await page.$('ul.grid');
    expect(ul).not.toBeNull();
  
    //the first 5 li elements exist
    const liElements = await page.$$('ul.grid > li');
    expect(liElements.length).toBeGreaterThan(5);
  
    // Check if the first 5 li elements contain a and shop-list-item elements
    expect(await liElements[0].$$('a > shop-list-item')).not.toBeNull();
    expect(await liElements[1].$$('a > shop-list-item')).not.toBeNull();
    expect(await liElements[2].$$('a > shop-list-item')).not.toBeNull();
    expect(await liElements[3].$$('a > shop-list-item')).not.toBeNull();
    expect(await liElements[4].$$('a > shop-list-item')).not.toBeNull();
  });


test('image exists', async ({ page }) => {
    await page.goto('http://localhost:8081/list/mens_outerwear');
  
    const image = page.getByRole('img', { name: 'Men\'s Outerwear' });

    // Assert that the image is visible on the page
    await expect(image).toBeVisible();
  });

  test('check header tabs exist', async ({ page }) => {
    await page.goto('http://localhost:8081/list/mens_outerwear');
  
    // #tabContainer exists
    const tabContainer = page.locator('#tabContainer');
    await expect(tabContainer).toBeVisible();
  
    // "Men's Outerwear" tab exists
    const mensOuterwearTab = tabContainer.locator('a[href="/list/mens_outerwear"]');
    await expect(mensOuterwearTab).toBeVisible();
  
    //  "Ladies Outerwear" tab exists
    const ladiesOuterwearTab = tabContainer.locator('a[href="/list/ladies_outerwear"]');
    await expect(ladiesOuterwearTab).toBeVisible();
  
    // "Men's T-Shirts" tab exists
    const mensTshirtsTab = tabContainer.locator('a[href="/list/mens_tshirts"]');
    await expect(mensTshirtsTab).toBeVisible();
  
    //  "Ladies T-Shirts" tab exists
    const ladiesTshirtsTab = tabContainer.locator('a[href="/list/ladies_tshirts"]');
    await expect(ladiesTshirtsTab).toBeVisible();
  });