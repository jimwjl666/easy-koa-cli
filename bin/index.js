#!/usr/bin/env node
import fs from 'fs'
import config from './questions/index.js'
import createIndexTemplate  from './createIndexTemplate.js'
import createPackageTemplate from './createPackageTemplate.js'
import execa from 'execa'

const getRootPath = function(){
  return `./${config.packageName}`
}
function deleteall(path) {
  var files = [];
  if(fs.existsSync(path)) {
    files = fs.readdirSync(path);
    files.forEach(function(file, index) {
      var curPath = path + "/" + file;
      if(fs.statSync(curPath).isDirectory()) { // recurse
        deleteall(curPath);
      } else { // delete file
        fs.unlinkSync(curPath);
      }
    });
    fs.rmdirSync(path);
  }
};
deleteall(getRootPath())
//创建文件目录
fs.mkdirSync(getRootPath())
//创建index.js
fs.writeFileSync(`${getRootPath()}/index.js`,createIndexTemplate(config))
//创建package.json
fs.writeFileSync(`${getRootPath()}/package.json`,createPackageTemplate(config))
//安装依赖

execa("yarn",{
  cwd: getRootPath(),
  stido:[2,2,2] // 将输入流显示到父进程
})
