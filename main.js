let menuBtn = document.getElementById("menuBtn");
let sideNav = document.getElementById("sideNav");
let menu = document.getElementById("menu");

menuBtn.addEventListener("click", function() {
    if(sideNav.style.right == "-250px") {
        sideNav.style.right = "0";
    }else{
        sideNav.style.right = "-250px";
    }
});




