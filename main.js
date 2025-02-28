first_block = document.getElementById("first_block");
main_block = document.getElementById("main_block");
fade_block = document.getElementById("fade_block");
body = document.getElementById("body");

setTimeout(function() {
    fade_block.style.opacity = "1";
    fade_block.style.filter = "blur(100px)";
    setTimeout(function() {
        first_block.style.display = "none";
        main_block.style.opacity = "100%";
        fade_block.style.opacity = "0";
        fade_block.style.filter = "blur(0px)";
    }, 1500);
}, 2500);