// @ts-check

const childProcess = require("child_process");
childProcess.exec("mlogjs script.ts out.mlog", function (error, stdout, stderr) {
  console.log(stdout);
  console.log(stderr);
  console.log(error ?? "");
});
