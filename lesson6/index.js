const getFileList = require("./util");
const filePath = process.argv[2];
const fileExt = process.argv[3];

getFileList(filePath, fileExt, (error, list) => {
  if (error) {
    console.log(error);
    return;
  }
  list.forEach((x) => console.log(x));
});
