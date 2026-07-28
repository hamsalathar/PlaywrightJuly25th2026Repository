const{test, expect}=require("@playwright/test")
test("First Playwright Test", async function dispaly(){
    console.log("This is the First Playwright Test using aysnc")
    })

    test("Second PlayWright Test", async function(){
        console.log("This is the second Playwright test using async function")
    })

    test("Third Playwright Test", async () => {
        console.log("This is the third Playwright trst using async arrow function")
    })