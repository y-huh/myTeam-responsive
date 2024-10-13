let elNeavbarWrapper = document.querySelector(".navbar-wrapper")
let elNeavbar = document.querySelector(".navbar")


function HandleHamburgerButton(){
    elNeavbarWrapper.classList.toggle("show-wrapper")
    elNeavbar.classList.toggle("show-navbar")
}
function CloseBtn(){
    elNeavbarWrapper.classList.remove("show-wrapper")
    elNeavbar.classList.remove("show-navbar")
}
elNeavbarWrapper.addEventListener("click", function(evt){
    if(evt.target.id == "wrapper"){
        elNeavbarWrapper.classList.remove("show-wrapper")
    elNeavbar.classList.remove("show-navbar")
    }

})