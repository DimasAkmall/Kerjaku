var logcheck = localStorage.getItem("logcheck")
if (logcheck == 1) {
    window.location.assign("Home.html")
    localStorage.removeItem("logcheck")
    localStorage.setItem("logged_in", 1)
}

var logged_in = localStorage.getItem("logged_in")
if (logged_in == 1) {
    var user = document.getElementsByClassName("USER")[0]
    var buttons = document.getElementsByClassName("BUTTON")[0]
    var disabled = document.getElementsByClassName("disabled")[0]
    buttons.classList.add("d-none")
    user.classList.remove("d-none")
    disabled.classList.remove("disabled")
}

var logout = document.getElementById("logout")
logout.addEventListener("click", function () {
    localStorage.clear()
    window.location.assign("Home.html")
})

var username = (document.getElementById("username").textContent = localStorage.getItem("name"))
var username = (document.getElementById("username-txt").textContent = localStorage.getItem("name"))
var username = (document.getElementById("email").textContent = localStorage.getItem("email"))
