import Logger from "./singleton"


Logger.setConfig({
    appName: "Budapeste"
})




const appInit = () => {


    Logger.log("App running in port 8080")
}

appInit()