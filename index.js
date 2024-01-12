alert("mycontent start run");

chrome.runtime.onMessage.addListener(

    function (request, sender, sendResponse) {

        console.log(sender.tab ?

            "from a content script:" + sender.tab.url :

            "from the extension");

        if (request.greeting == "hello")//判断是否为要处理的消息

            sendResponse({ farewell: "goodbye" });

        //访问页面的DOM

        document.body.style.backgroundColor = "green";

        document.getElementById("kw").value = "crx"

    }
);
