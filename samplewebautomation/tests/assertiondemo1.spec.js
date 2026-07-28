const{test,expect}=require("@playwright/test")
test("Validate Two Nuumbers", () => {
     
         expect(10).toBe(10)
    })

 test("Validate Decimal Numbers", () => {
    expect(10.75).toBe(10.75);
 })  
 
 test("Validate Boolean Values", () => {
    expect(true).toBe(true)
 })

 test("Validate  Boolean Values", () => {
    expect(true).toBeTruthy()
 })

 test("Validate String Partial Content", () => {
    expect("S G Software Testing Institute".includes("Testing")).toBeTruthy()
})
test("Validate String ontent", () => {
    expect("S G Software Testing Institute").toContain("Software")
})

test("Validate String content Using Equal Operator ", () => {
    expect("S G Software Testing Institute" == "S G Software Testing Institute").toBeTruthy()
})

test("Validate Integer With Greater Than Operator", () => {
  expect(10).toBeGreaterThan(5)})

test("Validate Integer With Lesser Than Operator", () => {
    expect(5).toBeLessThan(10)
})