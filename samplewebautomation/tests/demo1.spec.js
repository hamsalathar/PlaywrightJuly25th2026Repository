const{test, expect}=require("@playwright/test")
test("First Playwright test", function display(){
  console.log("This is the First Playwright test")  
})

test("Second Playwright test", function(){
    console.log("It is the Second Test created by Ananymous JavaScript functionplaywright")
})

test("This PlayWright test", async()=>{
    console.log("this is the third tesy created by Arrow function")
})