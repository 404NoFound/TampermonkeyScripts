/// <reference path="..\..\typings\index.d.ts"/>
"use strict";
var fs = require("fs");
function getFiles(path) {
    var files = fs.readdirSync(path);
    console.log(files);
}
(function () {
    getFiles("E:\新建文件夹");
})();
//# sourceMappingURL=createDirs.js.map