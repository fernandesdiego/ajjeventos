$(document).ready(function() {
    $("header").css({'opacity': 0});
    $("header").animate({ opacity: 1 }, 1000);
    $(".service-item .img-fluid").css({'opacity': 0, 'margin-top': '50px'});
    $(".service-item .img-fluid").animate({ opacity: 1, marginTop: "0px" }, 2000);
});
