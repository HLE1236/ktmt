// tests/test_ui_dom.js
// Kiểm thử giao diện, DOM IDs, liên kết scripts và CSS

const fs = require('fs');
const path = require('path');

const htmlContent = fs.readFileSync('index.html', 'utf8');
const appJsContent = fs.readFileSync('js/app.js', 'utf8');
const toolsJsContent = fs.readFileSync('js/tools.js', 'utf8');
const cssContent = fs.readFileSync('css/style.css', 'utf8');

const results = {
  scriptLinks: { passed: true, details: [] },
  cssLinks: { passed: true, details: [] },
  htmlIds: new Set(),
  queriedIdsInApp: new Set(),
  queriedIdsInTools: new Set(),
  dynamicIds: new Set(),
  missingIds: [],
  inlineHandlers: []
};

// 1. Kiểm tra các liên kết file <script src="...">
const scriptRegex = /<script\s+[^>]*src=["']([^"']+)["'][^>]*>/gi;
let match;
while ((match = scriptRegex.exec(htmlContent)) !== null) {
  const src = match[1];
  if (src.startsWith('http://') || src.startsWith('https://')) {
    results.scriptLinks.details.push({ src, type: 'external', exists: true });
  } else {
    const localPath = path.join('.', src);
    const exists = fs.existsSync(localPath);
    results.scriptLinks.details.push({ src, type: 'local', exists });
    if (!exists) results.scriptLinks.passed = false;
  }
}

// 2. Kiểm tra các liên kết file <link rel="stylesheet" href="...">
const cssRegex = /<link\s+[^>]*href=["']([^"']+)["'][^>]*>/gi;
while ((match = cssRegex.exec(htmlContent)) !== null) {
  const href = match[1];
  if (href.startsWith('http://') || href.startsWith('https://')) {
    results.cssLinks.details.push({ href, type: 'external', exists: true });
  } else {
    const localPath = path.join('.', href);
    const exists = fs.existsSync(localPath);
    results.cssLinks.details.push({ href, type: 'local', exists });
    if (!exists) results.cssLinks.passed = false;
  }
}

// 3. Trích xuất tất cả ID trong index.html
const idRegex = /\bid=["']([^"']+)["']/gi;
while ((match = idRegex.exec(htmlContent)) !== null) {
  results.htmlIds.add(match[1]);
}

// 4. Trích xuất các ID được tạo động qua chuỗi template HTML trong app.js và tools.js
const dynamicIdRegex = /id=["']([a-zA-Z0-9_-]+)["']/gi;
[appJsContent, toolsJsContent].forEach(code => {
  while ((match = dynamicIdRegex.exec(code)) !== null) {
    results.dynamicIds.add(match[1]);
  }
});

// 5. Trích xuất tất cả getElementById('...') và querySelector('#...') trong app.js
const getElementRegex = /document\.getElementById\(\s*['"`]([a-zA-Z0-9_-]+)['"`]\s*\)/g;
while ((match = getElementRegex.exec(appJsContent)) !== null) {
  results.queriedIdsInApp.add(match[1]);
}
const querySelRegex = /document\.querySelector\(\s*['"`]#([a-zA-Z0-9_-]+)['"`]\s*\)/g;
while ((match = querySelRegex.exec(appJsContent)) !== null) {
  results.queriedIdsInApp.add(match[1]);
}

// Trong tools.js:
while ((match = getElementRegex.exec(toolsJsContent)) !== null) {
  results.queriedIdsInTools.add(match[1]);
}
while ((match = querySelRegex.exec(toolsJsContent)) !== null) {
  results.queriedIdsInTools.add(match[1]);
}

// 6. Đối chiếu các ID được query xem có trong htmlIds hoặc dynamicIds không
const allAvailableIds = new Set([...results.htmlIds, ...results.dynamicIds]);

const allQueriedIds = new Set([...results.queriedIdsInApp, ...results.queriedIdsInTools]);
allQueriedIds.forEach(id => {
  if (!allAvailableIds.has(id)) {
    results.missingIds.push(id);
  }
});

// 7. Kiểm tra các inline event handlers trong index.html
const onclickRegex = /\bon[a-z]+=["']([^"']+)["']/gi;
while ((match = onclickRegex.exec(htmlContent)) !== null) {
  results.inlineHandlers.push(match[1]);
}

console.log('--- DOM & UI TEST RESULTS ---');
console.log('1. Script Links Check:');
results.scriptLinks.details.forEach(s => {
  console.log(`   ${s.exists ? '✓' : '✗'} [${s.type}] ${s.src}`);
});

console.log('\n2. CSS Links Check:');
results.cssLinks.details.forEach(c => {
  console.log(`   ${c.exists ? '✓' : '✗'} [${c.type}] ${c.href}`);
});

console.log(`\n3. Total static IDs in index.html: ${results.htmlIds.size}`);
console.log(`4. Total dynamic IDs created in JS: ${results.dynamicIds.size}`);
console.log(`5. Total unique IDs queried in app.js: ${results.queriedIdsInApp.size}`);
console.log(`6. Total unique IDs queried in tools.js: ${results.queriedIdsInTools.size}`);

if (results.missingIds.length === 0) {
  console.log('\n✓ ALL queried IDs exist in HTML or dynamic templates!');
} else {
  console.error('\n✗ MISSING IDs (Queried in JS but NOT in HTML/templates):', results.missingIds);
}

console.log('\n7. Inline Event Handlers in index.html:');
results.inlineHandlers.forEach(h => console.log('   Inline handler:', h));
