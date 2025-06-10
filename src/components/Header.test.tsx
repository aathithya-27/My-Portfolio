import { test, expect } from '@playwright/experimental-ct-react';
import Header from './Header';

test.use({ viewport: { width: 375, height: 667 } }); // iPhone 6/7/8 size for mobile view

test('mobile menu toggle button is visible and toggles menu', async ({ mount }) => {
  const component = await mount(<Header />);

  // Check that the mobile menu button is visible
  const menuButton = component.locator('button[aria-label="Toggle menu"]');
  await expect(menuButton).toBeVisible();

  // Initially, mobile menu should be hidden
  const mobileNav = component.locator('nav').filter({ hasText: 'Home' });
  await expect(mobileNav).toBeHidden();

  // Click menu button to open menu
  await menuButton.click();
  await expect(mobileNav).toBeVisible();

  // Click menu button to close menu
  await menuButton.click();
  await expect(mobileNav).toBeHidden();
});

test('mobile menu links are centered and have correct text', async ({ mount }) => {
  const component = await mount(<Header />);

  // Open mobile menu
  const menuButton = component.locator('button[aria-label="Toggle menu"]');
  await menuButton.click();

  // Check each nav link text and alignment
  const navLinks = component.locator('nav a');
  const expectedLinks = ['Home', 'About', 'Skills', 'Projects', 'Contact'];
  for (let i = 0; i < expectedLinks.length; i++) {
    await expect(navLinks.nth(i)).toHaveText(expectedLinks[i]);
    await expect(navLinks.nth(i)).toHaveCSS('text-align', 'center');
  }
});
