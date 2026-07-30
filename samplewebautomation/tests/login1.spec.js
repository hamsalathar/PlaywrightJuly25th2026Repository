const{test, expect}= require('@playwright/test')
test("Launch Application and Validate", async({page}) => {
await page.goto("https://sgtestinginstituteapp.onrender.com/")
await page.waitForTimeout(3000)

const title = await page.title()
console.log("Title :" +title)

const url = await page.url()
console.log("URL of the application :" +url)

await expect(page).toHaveTitle("S G Software Testing Institute");
await expect(page).toHaveURL("https://sgtestinginstituteapp.onrender.com/login");
});
