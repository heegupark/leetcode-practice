const fs = require('fs');
const { exec } = require('child_process');

const folder = './';
const outputFileName = 'README.md';

const getNewestFile = (files, path) => {
    var out = [];
    files.forEach(function(file) {
        var stats = fs.statSync(path + "/" +file);
        if(stats.isFile()) {
            out.push({"file":file, "mtime": stats.mtime.getTime()});
        }
    });
    out.sort(function(a,b) {
        return b.mtime - a.mtime;
    })
    return (out.length>0) ? out[0].file : "";
}

const getTitle = (title) => {
  return title.split('-').map((item) => item[0].toUpperCase() + item.substring(1))
};

if(fs.existsSync(`${folder}${outputFileName}`)) fs.unlinkSync(`${folder}${outputFileName}`);
let mostRecentFile = '';
fs.readdir(folder, (err, files) => {
  mostRecentFile = getNewestFile(files, folder);
  let stream = fs.createWriteStream(outputFileName, {'flags': 'a'});
  stream.once('open', (fd) => {
    stream.write("# leetcode-practice(javascript)" + "\r\n");
    stream.write("\r\n" + "Leetcode problem practice(JavaScript)" + "\r\n");
    files.forEach(file => {
      const tempTitle = getTitle(file);
      if(Number.isInteger(Number(file.split('-')[0]))) {
        const title = `${tempTitle.shift()}. ${tempTitle.join(' ')}`;
        const line = `### <a href="https://github.com/heegupark/leetcode-practice/blob/main/${file}">${title}</a>`;
        stream.write("\r\n" + line + "\r\n");
      }
    });
  });
});


exec('git add .', (err, stdout, stderr) => {
  if (err) {
    console.error('error in executing "git add ."');
    return;
  }
  console.log(stdout);
  console.log('"git add" was successful.');
  console.log('Trying to "git commit -m"');
  exec(`git commit -m "${getTitle(mostRecentFile)}"`, (err, stdout, stderr) => {
    if (err) {
      console.error(`error in executing "git commit -m "${getTitle(mostRecentFile)}"`);
      return;
    }
    console.log(stdout);
    console.log('"git commit" was successful.');
    console.log('Trying to "git push origin main"');
    exec('git push origin main', (err, stdout, stderr) => {
      if (err) {
        console.error('git push origin main');
        return;
      }
      console.log(stdout);
      console.log('git push origin main was successful.');
    });
  });
});
