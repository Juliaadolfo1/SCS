let mobileMenu = document.querySelector(".mobilemenu")
let menuItems = document.querySelectorAll(".menuItem")
let mobileBurger = document.querySelector(".mobileburger")
let closeIcon = document.querySelector(".closeIcon")
let menuIcon = document.querySelector(".menuIcon")


function toggleMenu () {
    if (mobileMenu.classList.contains("showMenu")) {
        mobileMenu.classList.remove("showMenu");
        closeIcon.style.display = "none";
        menuIcon.style.display = "block";
    } else {
        mobileMenu.classList.add("showMenu");
        closeIcon.style.display = "block";
        menuIcon.style.display = "none";
    }
}

mobileBurger.addEventListener("click", toggleMenu);

menuItems.forEach(
    function(menuItem) {
        menuItem.addEventListener("click", toggleMenu)
    }
)

