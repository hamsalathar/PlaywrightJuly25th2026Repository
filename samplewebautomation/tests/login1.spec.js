const{test, expect}= require('@playwright/test')
test("Launch Application and Validate", async({page}) => {
await page.goto("https://sgtestinginstituteapp.onrender.com/")
await page.waitForTimeout(3000)

const title = await page.title()
console.log("Title :" +title)

const url = await page.url()
console.log("URL of the application :" +url)

})
