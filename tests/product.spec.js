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

    test('should check if the Ladies Outerwear image exists', async ({ page }) => {
      await page.goto('http://localhost:8081/list/ladies_outerwear'); 
  
      // Check if the image exists
      const image = await page.getByRole('img', { name: 'Ladies Outerwear' });
    
      //image is visible
      await expect(image).toBeVisible();
    
      await expect(image).toHaveAttribute('src', 'images/ladies_outerwear.jpg');
    });


test('should check if the header for Ladies Outerwear exists', async ({ page }) => {
  await page.goto('http://localhost:8081/list/ladies_outerwear'); 
  
  //  text "Ladies Outerwear"
  const headerTitle = await page.locator('header h1');
  await expect(headerTitle).toHaveText('Ladies Outerwear');

  //  "(6 items)"
  const headerItems = await page.locator('header span');
  await expect(headerItems).toHaveText('(6 items)');
});


test('should check if specific list items in the grid exist', async ({ page }) => {
  await page.goto('http://localhost:8081/list/ladies_outerwear'); 
  
  // Check if the <ul> with class 'grid' exists
  const ulGrid = await page.locator('ul.grid');
  await expect(ulGrid).toBeVisible();

  // Check each individual list item and its link
  const firstItem = await page.locator('ul.grid li a[href="/detail/ladies_outerwear/Ladies+Modern+Stretch+Full+Zip"]');
  await expect(firstItem).toBeVisible();

  const secondItem = await page.locator('ul.grid li a[href="/detail/ladies_outerwear/Ladies+Colorblock+Wind+Jacket"]');
  await expect(secondItem).toBeVisible();

  const thirdItem = await page.locator('ul.grid li a[href="/detail/ladies_outerwear/Ladies+Voyage+Fleece+Jacket"]');
  await expect(thirdItem).toBeVisible();

  const fourthItem = await page.locator('ul.grid li a[href="/detail/ladies_outerwear/Ladies+Pullover+L+S+Hood"]');
  await expect(fourthItem).toBeVisible();

  const fifthItem = await page.locator('ul.grid li a[href="/detail/ladies_outerwear/Ladies+Sonoma+Hybrid+Knit+Jacket"]');
  await expect(fifthItem).toBeVisible();

  const sixthItem = await page.locator('ul.grid li a[href="/detail/ladies_outerwear/Ladies+Yerba+Knit+Quarter+Zip"]');
  await expect(sixthItem).toBeVisible();
});