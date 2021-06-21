import ejs from 'ejs'
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'
import prettier from 'prettier'
export default (config)=>{
  const __dirname = fileURLToPath(import.meta.url)// import 模式下的路径修改
  const templateCode = fs.readFileSync(path.resolve(__dirname, '../template/index.ejs'))
  const code = ejs.render(templateCode.toString(),{
    ...config
  })
  return prettier.format(code, { parser:'babel' })
}