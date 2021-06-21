function hideSidebar() {
    const sidebar = document.querySelector(".sidebar")
    if (sidebar.classList.contains("hidden")) {
        sidebar.classList.remove("hidden")
        document.body.style.overflowX = "";
        document.getElementsByClassName("content")[0].classList.remove("sideBarOpened");
        if (screen.width <= 768) {
            document.getElementsByClassName("content")[0].style.right = "";
            setTimeout(() => {
                document.getElementsByClassName("content")[0].style.transition = "opacity 0.25s, right 0.45s";
                document.getElementsByClassName("content")[0].style.opacity = "";
                setTimeout(() => {
                    document.getElementsByClassName("content")[0].style.transition = "";
                }, 250);
            }, 100);
            if (document.title.toLocaleLowerCase().includes("home")) {
                document.getElementsByClassName("centerAligned")[0].style.opacity = "";
                document.getElementsByClassName("centerAligned")[0].style.right = "";
            }
        }

        try {
            document.getElementById("titleText").classList.remove("sideBarOpened");
        } catch {}
    } else {
        sidebar.classList.add("hidden")
        document.body.style.overflowX = "hidden";
        document.getElementsByClassName("content")[0].classList.add("sideBarOpened");
        if (screen.width <= 768) {
            document.getElementsByClassName("content")[0].style.right = "calc(-50% + 20px)";
            document.getElementsByClassName("content")[0].style.opacity = "0";
            if (document.title.toLocaleLowerCase().includes("home")) {
                document.getElementsByClassName("centerAligned")[0].style.opacity = "0";
                document.getElementsByClassName("centerAligned")[0].style.right = "-100%";
            }
        }

        try {
            document.getElementById("titleText").classList.add("sideBarOpened");
        } catch {}
    }
}

function toggledark() {
    const body = document.body;
    const darkmodeToggle = document.querySelector('.darktoggle')
    const image = document.querySelector(".borger")

    image.src = "images/Hamburger_icon_dark.svg"
    darkmodeToggle.innerText = "Dark mode"
    body.classList.toggle("isdark");

    if (body.classList.contains("isdark")) {
        localStorage.setItem("viriv_darkMode", "true");
        darkmodeToggle.innerText = "Light mode";
    } else {
        localStorage.setItem("viriv_darkMode", "false");
    }
}

onload = function() {
    if (this.localStorage.getItem("viriv_darkMode") == "true") {
        document.body.classList.add("isdark");
    }
}