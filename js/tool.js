var zaQR;
$(document).ready(function () {
    if (document.getElementById("zaQRcode")) {
        zaQR = new QRCode(document.getElementById("zaQRcode"), {
            width: 170,
            height: 170
        });
        makeCode();

        $("#text").
            on("blur", function () {
                makeCode();
            }).
            on("keydown", function (e) {
                if (e.keyCode == 13) {
                    makeCode();
                }
            });
    }
});
function makeCode() {
    var elText = document.getElementById("zaQRtxt");
    if (!elText.value) {
        if(chrome.tabs){
            chrome.tabs.getSelected(null, function (tab) {
                elText.value = tab.url;
                zaQR.makeCode(elText.value);
            });
        }
    } else {
        zaQR.makeCode(elText.value);
    }
}