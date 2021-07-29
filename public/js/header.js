let navBar = document.getElementById('navigation-bar-mobile');
let searchBar = document.getElementById("search");

function dropMenu(){
    let subcategoryMenu = document.querySelector(".active");
    if (navBar.style.display === "block"){
        navBar.style.display = "none";
        subcategoryMenu.classList.remove("active")
    } else {
        navBar.style.display = "block";
        searchBar.style.display = "none";
        subcategoryMenu ? subcategoryMenu.classList.remove("active") : ""
    }
}

function dropSearch(){
    let subcategoryMenu = document.querySelector(".active");
    if (searchBar.style.display === "block") {
        searchBar.style.display = "none";
        subcategoryMenu.classList.remove("active")
    } else {
        searchBar.style.display = "block";
        navBar.style.display = "none";
        subcategoryMenu.classList.remove("active")
    }
}

function dropSubCategoryMenu (id) {
    let list = document.getElementById(`${id}`)
    list.classList.toggle("active")
    navBar.style.display = "none"
    searchBar.style.display = "none"
}

function closeWindow () {
    document.querySelector(".active").classList.remove("active")
}