const fs = require('fs');
const packageJsonPath = './package.json';

// 读取 package.json 文件
const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));

// 递增版本号
const versionParts = packageJson.version.split('.').map(Number);
versionParts[2] += 1; // 递增最后一部分版本号

// 更新 package.json 中的版本号
packageJson.version = versionParts.join('.');

// 将更新后的 package.json 保存回文件
fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2), 'utf8');

console.log(`版本号已递增至 ${packageJson.version}`);