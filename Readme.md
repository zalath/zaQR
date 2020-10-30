## chrome qr extension

- toolbar application
- rightclick menu

### structure

- toolbar related
    - js/tool.js
    - qr.html
    - style/tool.css

- rightclick menu related
    - js/context.js //inject into webpage
    - style/context.css //inject into webpage
    - js/back.js //run in background
    

### logic

- toolbar
    - as runing an independent paga in a new tab
- rightclick menu
    - environment is two, webpage and backstage
    - inject different scripts into webpage and backstage
    - command starts from the menu, sending infomation directly to the backstage script
    - back-script cannot change webpage's content, it sends a tab-message to call webpage-script's function
    - webpage-script make the QRcode and display