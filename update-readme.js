const fs = require('fs');
//1668-maximum-repeating-substring
let stream = fs.createWriteStream("README.md", {'flags': 'a'});
const name = process.argv[2];
const tempTitle = name.split('-').map((item) => item[0].toUpperCase() + item.substring(1));
const title = `${tempTitle.shift()}. ${tempTitle.join(' ')}`;
const line = `### <a href="https://github.com/heegupark/leetcode-practice/blob/main/${name}.js">${title}</a>`;
stream.once('open', (fd) => {
  stream.write("\r\n" + line + "\r\n");
});
