var qrcode;
$(document).ready(function () {
    chrome.contextMenus.create({
        type:'normal',
        title:'创建二维码-zaQR',
        id:'zaQRtool',
        contexts:['all'],
        onclick: makeCode
    });
});
function makeCode(info,tab){
    chrome.tabs.sendMessage(tab.id,{'txt':info.selectionText,'type':'zaQR'});
}