import Logger from "./singleton"

describe("Singleton Pattern", () => {

    it("Should create a new instance of Singleton ", () => {

       Logger.setConfig({appName: "jest test"})

    })
})