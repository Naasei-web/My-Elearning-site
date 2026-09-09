//asignig names
const manubtn = document.querySelector("#manu-button")
const closebtn = document.querySelector("#close-button")
const sidebar = document.querySelector(".sidebar")
const togglebtn = document.querySelector(".pc-sizetoggle")
const innerins = document.querySelector(".iner-ins")

manubtn.addEventListener("click",() =>{sidebar.style.display = "flex"

})
closebtn.addEventListener("click",() =>{sidebar.style.display = "none" 

 })

togglebtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    togglebtn.classList.toggle("clorechange")
    innerins.classList.toggle("sun")
});

