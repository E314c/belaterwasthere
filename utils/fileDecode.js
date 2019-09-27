const fs = require('fs');
const path = require('path');

// Load File:
const file = fs.readFileSync(path.resolve(__dirname, '../samples/BelaterFlexJavascript.js'), 'utf8');

console.log('File was like:', file.slice(40, 50));

let cleanFile = file.replace(/\\x[0-9a-fA-F]{2}/g, match => {
    console.log(`Match with: ${match}`);
    return eval(`'${match}'`);
});

fs.writeFileSync('/tmp/replacedStrings.js', cleanFile);