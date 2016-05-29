// ==UserScript==
// @name         一键保存到为知笔记
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        http://weibo.com/*
// @grant        none
// ==/UserScript==


(function() {

    // Your code here...
    var appendBtn=function(){
        var saveToWiz=function(){
            $("textarea.W_input").value="@保存到为知笔记";
            $("a.W_btn_a").click();
        };
        var newBtnA=document.createElement("a");
        newBtnA.setAttribute("class","W_btn_a");
        //newBtnA.setAttribute("href","void()");
        newBtnA.setAttribute("id","btnSaveToWiz");
        //newBtnA.setAttribute("onclick","saveToWiz()");
        newBtnA.setAttribute("onclick",'  document.querySelector("textarea.W_input").value="@保存到为知笔记"; document.querySelector("a.W_btn_a").click();');
        newBtnA.appendChild((document.createTextNode("保存到为知笔记")));

        var commentButton=document.querySelector(".btn.W_fr");
        if (commentButton===null) {
            console.log("can't find button");
        }
        else{
            commentButton.appendChild(newBtnA);
        }
    };
    setTimeout(appendBtn,3500);
})();

