import { test, expect } from '@playwright/test';

test('Pixel-based Surface Automation Demo', async ({ page }) => {
  // 1. Setup: Ensure consistent resolution for pixel accuracy
  await page.setViewportSize({ width: 1280, height: 720 });
  await page.goto('https://the-internet.herokuapp.com/checkboxes');

  // 2. Scenario: Handle Checkboxes via Pixels (Mouse API)
  // Instead of using page.check('#checkbox'), we use coordinates.
  // We assume Checkbox 1 is located at roughly X:15, Y:100 relative to the container.
  
console.log('Moving mouse to pixel coordinates for Checkbox 1...');
  
  // Hover over the pixel first to show the movement (useful for demos)
  await page.mouse.move(15, 100);
  await page.waitForTimeout(1000); // Pause to visually confirm the hover
  await page.mouse.click(197,132);
  await page.waitForTimeout(1000); // Pause to visually confirm the click
  // 3. Scenario: Handle Textboxes via Anchor + Offset
  // Imagine a text label is at (100, 200). We want to type in a box 50px to the right.
  const anchorX = 100;
  const anchorY = 200;
  const offsetX = 50;

  console.log('Clicking offset from anchor...');
  await page.mouse.click(anchorX + offsetX, anchorY);
  await page.keyboard.type('Simulating Surface Input');

  // 4. Verification (The "Pixel Check")
  // In pixel automation, we often take a screenshot of a small area 
  // to see if the "color" changed (e.g., is there a checkmark now?)
  const checkboxArea = await page.screenshot({
    clip: { x: 10, y: 95, width: 20, height: 20 }
  });
  
  console.log('Screenshot of pixel area captured for visual validation.');


})