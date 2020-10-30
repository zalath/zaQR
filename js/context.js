var zaQRnew;
$(document).ready(function () {
    $(document.body).append("<div class='zaQRcover'></div>"+
                            "<div class='zaQRpop'>"+
                                "<div id='zaQRnew' class='zaQRqr'></div>"+
                                "<div class='zaQRtitle'>zaQR</div>"+
                            "</div>");
    if(document.getElementById('zaQRnew')){
        zaQRnew = new QRCode(document.getElementById("zaQRnew"), {
            width: 170,
            height: 170
        });
    }
    chrome.runtime.onMessage.addListener(function(req,sender){
        if(req.type == 'zaQR') {
            zaQRnew.makeCode(req.txt);
            zaQRshow();
        }
    })
    $('.zaQRcover')[0].onclick = zaQRhide;
});

function zaQRshow(){
    $('.zaQRcover').addClass('zaQRshow');
    $('.zaQRpop').addClass('zaQRshow');
}
function zaQRhide(){
    $('.zaQRcover').removeClass('zaQRshow');
    $('.zaQRpop').removeClass('zaQRshow');
}