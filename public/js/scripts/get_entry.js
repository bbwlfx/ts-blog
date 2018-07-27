const fs = require('fs');
const path = require('path');
const filePath = path.resolve(__dirname, '../entry');
const pages = fs
  .readdirSync(filePath)
  .filter(file => fs.statSync(path.resolve(filePath, file)).isDirectory());

const entries = {};
for(const entry of pages) {
  entries[entry] = ['regenerator-runtime/runtime', `/entry/${entry}`];
}

module.exports = entries;