const fs = require('fs');
//1668-maximum-repeating-substring
// require('events').EventEmitter.defaultMaxListeners = 0;

const folder = './';
const outputFileName = 'test.md';
const exec = require('child_process').exec;

fs.unlinkSync(`${folder}${outputFileName}`);

fs.readdir(folder, (err, files) => {
  let stream = fs.createWriteStream(outputFileName, {'flags': 'a'});
  stream.once('open', (fd) => {
    stream.write("# leetcode-practice(javascript)" + "\r\n");
    stream.write("\r\n" + "Leetcode problem practice(JavaScript)" + "\r\n");
    files.forEach(file => {
      const tempTitle = file.split('-').map((item) => item[0].toUpperCase() + item.substring(1));
      if(Number.isInteger(Number(file.split('-')[0]))) {
        const title = `${tempTitle.shift()}. ${tempTitle.join(' ')}`;
        const line = `### <a href="https://github.com/heegupark/leetcode-practice/blob/main/${file}.js">${title}</a>`;
        stream.write("\r\n" + line + "\r\n");
      }
    });
  });
});

// const name = process.argv[2];
exec('git add .');
exec('git commit -m "Updated"');
exec('git push origin main');
