function hideSidebar() {
    const sidebar = document.querySelector(".sidebar")
    if (sidebar.classList.contains("hidden")) {
        sidebar.classList.remove("hidden")
        document.body.style.overflowX = ""


    } else { sidebar.classList.add("hidden") 
    document.body.style.overflowX = "hidden"}
}


function toggledark() {
    const body = document.body;
    const sidebar = document.getElementsByClassName("sidebar")[0];
    const darkmodeToggle = document.querySelector('.darktoggle')
    const image = document.querySelector(".borger")
    
    image.src = "images/Hamburger_icon_dark.svg"
    darkmodeToggle.innerText = "Dark mode"
    body.classList.toggle("isdark");
    
    if (body.classList.contains("isdark")) {
        darkmodeToggle.innerText = "Light mode";
    }

    

}


