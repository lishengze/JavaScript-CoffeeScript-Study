fs = require 'fs'
path = require 'path'
fileName = path.join __dirname, './fs-test.txt'
fileData = "Hello Pid: " + process.pid + '\n';

fs.writeFile fileName, fileData, (err) ->
  console.log err
