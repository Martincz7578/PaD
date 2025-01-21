$(document).ready(function(){
    $("#home").click(function(){
        window.location.href = "index.html";
    });
    $("#fw").click(function(){
        window.location.href = "fw.html";
    });
    $("#os").click(function(){
        window.location.href = "os.html";
    });
    $("#pds").click(function(){
        window.location.href = "pds.html";
    });
    $("#l").click(function(){
        window.location.href = "l.html";
    });
    $("#drivers").click(function(){
        window.location.href = "drivers.html";
    });
    $("#table").click(function(){
        window.location.href = "table.html";
    });
    $("#form").click(function(){
        window.location.href = "form.html";
    });
    function applyTheme() {
        if($("#theme").val() == "dark"){
            $('body').addClass("dark");
            $('header').addClass("dark");
            $('footer').addClass("dark");
            $('button').addClass("dark");
            $('select').addClass("dark");
        }else if($("#theme").val() == "light"){
            $('body').removeClass("dark");
            $('header').removeClass("dark");
            $('footer').removeClass("dark");
            $('button').removeClass("dark");
            $('select').removeClass("dark");
        }
    }

    $("#theme").change(function(){
        applyTheme();
    });
});
