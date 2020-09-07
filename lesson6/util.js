const fs = require("fs");
const path = require("path");

const getFileList = (filePath, ext, callback) => {
  fs.readdir(filePath, (err, list) => {
    if (err) {
      callback(err);
      return;
    }
    const filterList = list.filter((x) => path.extname(x) === "." + ext);
    callback(null, filterList);
  });
};
module.exports = getFileList;
