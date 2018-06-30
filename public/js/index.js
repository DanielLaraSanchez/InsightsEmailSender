var lBar = $(".load");
var bar = $("button span");
var button = $("#button1");

button.on("click", function(){
     lBar.addClass("loading");
     setTimeout(function(){
        lBar.removeClass("loading");
        button.addClass("completee");
     },500);
});
