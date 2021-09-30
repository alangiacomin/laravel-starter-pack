/* eslint-disable no-console */
const fs = require('fs');

function deleteFolderRecursive(path) {
  if (fs.existsSync(path) && fs.lstatSync(path).isDirectory()) {
    fs.readdirSync(path).forEach((file, index) => {
      const curPath = `${path}/${file}`;

      if (fs.lstatSync(curPath).isDirectory()) { // recurse
        deleteFolderRecursive(curPath);
      } else { // delete file
        fs.unlinkSync(curPath);
      }
    });

    console.log(`Deleting directory "${path}"...`);
    fs.rmdirSync(path);
  }
}

console.log('Cleaning working tree...');

deleteFolderRecursive('./public/assets');
deleteFolderRecursive('./public/css');
deleteFolderRecursive('./public/js');
deleteFolderRecursive('./public/fonts');
deleteFolderRecursive('./public/icons');
deleteFolderRecursive('./public/images');
deleteFolderRecursive('./public/storage');

console.log('Successfully cleaned working tree!');
