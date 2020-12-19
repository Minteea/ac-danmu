const AcClient = require("../client.js")

//使用init(主播房间号)初始化客户端
AcClient("13146389").then((ac_client) => {
    //启动websocket连接npm
    ac_client.wsStart();
    ac_client.on("enter", () => {
        console.log("Enter room success!");
    });
    ac_client.on("recent-comment", (commmnets) => {
        //获得建立连接当前的弹幕列表
        console.log(commmnets);
    });
    ac_client.on("danmaku", (danmaku) => {
        //收到的弹幕
        console.log(danmaku);
    });
});