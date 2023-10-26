const fs = require('fs')
const path = require('path')
const { exec } = require('child_process');
// 读取原始的 package.json 文件（在项目根目录中）
const originalPackageJson = require('./package.json')

// 创建一个新的 package.json 对象，可以根据需要进行修改
const newPackageJson = {
  name: originalPackageJson.name,
  version: originalPackageJson.version,
 
  // 添加其他字段，如果需要
  description: 'Vue3组件库',
  main: 'index.umd.js',// 指定打包后的入口文件
  scripts: {
    test: 'echo "Error: no test specified" && exit 1'
  },
  keywords: ['Vue3','UI','ts'],
  author: '梁晨',
  license: 'ISC'
}

// 将新的 package.json 写入到 dist 目录
const distPackageJsonPath = path.join(__dirname, 'dist/package.json')
fs.writeFileSync(distPackageJsonPath, JSON.stringify(newPackageJson, null, 2))
console.log(`生成package.json成功`)
// 进入 dist 目录并执行 npm publish
const distPath = path.join(__dirname, 'dist');
exec('npm publish', { cwd: distPath }, (error, stdout, stderr) => {
    if (error) {
      console.error(`发布错误: ${error.message}`);
      return;
    }
    console.log(`发布成功: ${stdout}`);
  });

