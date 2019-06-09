$(document).ready(function(){
$(".img1").click(function(){
    $(".img1").toggle(function(){
$(".para1").show();
    });
});

$(".img2").click(function(){
    $(".img2").toggle(function(){
        $(".para2").show();
    });
});

$(".img3").click(function(){
    $(".img3").toggle(function(){
        $(".para3").show();
    });
});

$(".para1").click(function(){
    $(".para1").toggle(function(){
        $(".img1").show();
    });
});

$(".para2").click(function(){
    $(".para2").toggle(function(){
        $(".img2").show();
    });
});

$(".para3").click(function(){
    $(".para3").toggle(function(){
        $(".img3").show();
    });
});


});