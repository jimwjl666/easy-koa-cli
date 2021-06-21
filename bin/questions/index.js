import options from './options.js'
import inquirer from 'inquirer'
const answer = await inquirer.prompt(options())
const havaMiddleware = (name)=>{
  return answer.middleware.indexOf(name)>-1
}
export default {
  packageName: answer.packageName,
  port: answer.port,
  middleware: {
    static: havaMiddleware('koaStatic'),
    router: havaMiddleware('koaRouter'),
    body:havaMiddleware('koaBody')
  }
}