// ==UserScript==
// @name         avmo.pw精简
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       xsxiaosa
// @match        https://avmo.pw/cn/movie/*
// @grant        none
// ==/UserScript==

/// <reference path="..\typings\index.d.ts"/>


(function() {
    'use strict';

    // Your code here...
    $("#movie-share").remove();
    $("footer").remove();
    var avatars= $("#avatar-waterfall  span");
    var avatarsStr="";
    $.each(avatars,function(index,value){
        avatarsStr+=$(value).text()+" ";
    });
    console.log(avatarsStr);
    var avatarsStrDiv= $("div");
    avatarsStrDiv.text=avatarsStr;
    
    console.log(avatarsStrDiv);
    $("#avatar-waterfall").after(avatarsStr);
})();