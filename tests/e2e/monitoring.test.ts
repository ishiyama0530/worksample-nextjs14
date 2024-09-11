import { expect, test } from "@playwright/test";

test("稼働モニタリング", async ({ page }) => {
  await page.goto("https://worksample-nextjs14.vercel.app/");

  await expect(page).toHaveTitle("Anon Board");
});
