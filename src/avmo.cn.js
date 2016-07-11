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


(function () {
    'use strict';

    // Your code here...
    $("#movie-share").remove();
    $("footer").remove();
    var avatars = $("#avatar-waterfall  span");
    var avatarsStr = "";
    $.each(avatars, function (index, value) {
        avatarsStr += $(value).text() + " ";
    });
    console.log(avatarsStr);
    var avatarsStrDiv = $("div");
    avatarsStrDiv.text = avatarsStr;

    console.log(avatarsStrDiv);
    $("#avatar-waterfall").after(avatarsStr);



    //文件名检索

    //定义变量
    var originTitle = "";
    var code;
    var publishTime;
    var length;
    var publisher;
    var series;
    var tags = "";

    originTitle = $("h3")[0].textContent;
    code = $("div.info p span:nth-child(2)")[0].textContent;
    publishTime = $("div.info p:nth-child(2)")[0].childNodes[1].textContent.trim();
    length = $("div.info p:nth-child(3)")[0].childNodes[1].textContent.trim();

    var headers = $("p.header");
    $.each(headers, function (index, value) {
        var textContent = value.textContent;
        if (textContent.indexOf("发行商") != -1) {
            publisher = value.nextElementSibling.textContent;
        }
        if (textContent.indexOf("系列") != -1) {
            series = value.nextElementSibling.textContent;
        }
    });


    var tagList = $("span.genre");
    $.each(tagList, function (index, value) {
        tags += value.textContent + " ";
    });
    originTitle = originTitle.replace(code, "");
    var newTitle = "(" + publisher + ")(" + code + ")" + originTitle + "_" + avatarsStr + "_" + series + "_" + publishTime + "_" + length + "_" + tags;

    var newTitleDiv = $("<div>");
    newTitleDiv.attr("id", "newTitle");
    newTitleDiv.append(newTitle);
    $("h3").after(newTitleDiv);
})();