/// <reference path="..\..\typings\index.d.ts"/>

import _ = require("lodash")
import fs = require("fs");

function getFiles(path: string) {
    let files = fs.readdirSync(path);
    console.log(files);

}


(function () {

    getFiles("E:\新建文件夹");
})();