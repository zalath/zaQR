## chrome qr extension 谷歌浏览器扩展

- toolbar application 工具插件
- rightclick menu 右键菜单

### structure

- toolbar related 工具插件相关文件
    - js/tool.js
    - qr.html
    - style/tool.css

- rightclick menu related 右键菜单相关文件
    - js/context.js //inject into webpage 注入网页代码
    - style/context.css //inject into webpage 注入网页代码
    - js/back.js //run in background 后台单独运行
    

### logic

- toolbar
    - as runing an independent paga in a new special tab
    - 在一个单独的特殊页面上运行
- rightclick menu
    - environment is two, webpage and backstage
    - inject different scripts into webpage and backstage
    - command starts from the menu, sending infomation directly to the backstage script
    - back-script cannot change webpage's content, it sends a tab-message to call webpage-script's function
    - webpage-script make the QRcode and display
    - 有两个环境，页面和后台
    - 将脚本注入到页面和后台运行
    - 命令开始于右键菜单的选择，之后直接发送给后台接收
    - 后台脚本不能直接操作页面，所以发送回一个带信息的请求给页面脚本
    - 页面脚本执行方法生成二维码并展示