// class Logger {

//     constructor(){
//         this.config = {
//             appName:  "Not configured"
//         }
//     }

//     setConfig(config){
//         this.config = config
//     }

//     log(message, ...params){
//         console.log(this.config.appName, message,params)
//     }
// }


// export default new Logger()

interface IConfig {
    appName: string
}

let configuration: IConfig =  {
    appName: "Not configured"
}

const LoggerObj =  {
    setConfig(config:IConfig) {
        configuration = config
    },
    log(message: string, ...params: any){
    console.log(configuration.appName, message)
    }
}

export default LoggerObj



/* A classe Logger é instanciada na inicializacao da aplicacao, e entao o node faz o cache.
Assim, a clase Logger utilizada em qualquer modulo da aplicacao será a instancia que criada no start da aplicacao */

