const fs = require('fs');
const path = require('path');

// 컴포넌트 폴더 경로
const componentsDir = path.join(__dirname, 'src');
const distDir = path.join(__dirname, 'dist');

// 컴포넌트 디렉토리에서 파일 읽기
const components = fs.readdirSync(componentsDir).filter(file => file.endsWith('.tsx'));

// 기존 package.json 읽기
const packageJsonPath = path.join(__dirname, 'package.json');
const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));

// exports 필드 초기화
const exportsField = {};

components.forEach(component => {
    const name = component.replace('.tsx', '');
    exportsField[`./${name}`] = {
        "types": `./src/${component}`,
        "import": `./dist/${name}.mjs`,
        "require": `./dist/${name}.js`
    };
});

// package.json 업데이트
packageJson.exports = exportsField;
fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2));

console.log('Exports field updated successfully.');
