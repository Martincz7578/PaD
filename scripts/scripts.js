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
            $('body').css("background-color", "#31363F");
            $('body').css("color", "#000000");
            $('header').css("border", "1px solid #76ABAE");
            $('footer').css("border", "1px solid #76ABAE");
            $('header').css("background-color", " #76ABAE");
            $('footer').css("background-color", " #76ABAE");
            $('button').css("background-color", "#DDDDDD");
            $('select').css("background-color", "#DDDDDD");
            $('button').css("color", "#BBBBBB");
            $('select').css("color", "#BBBBBB");
        }else{
            $('body').css("background-color", "#FFFDEC");
            $('body').css("color", "#EEEEEE");
            $('header').css("border", "1px solid #86A788");
            $('footer').css("border", "1px solid #86A788");
            $('header').css("background-color", " #86A788");
            $('footer').css("background-color", " #86A788");
            $('button').css("background-color", "#FFE2E2");
            $('select').css("background-color", "#FFE2E2");
            $('button').css("color", "#EEBEBE");
            $('select').css("color", "#EEBEBE");
        }
    }

    $("#theme").change(function(){
        applyTheme();
    });
});
