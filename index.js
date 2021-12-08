const toggleSwitch = document.querySelector('input[type="checkbox"]');
const toggleIcon = document.getElementById('toggle-icon');
const imageTarget = document.querySelector(".imageTarget");
const paragraphPage = document.querySelector(".paragraphPage");

function switchTheme(event){
    if(event.target.checked){
        document.documentElement.setAttribute("data-theme", "dark");
        imageTarget.src = "img/float2.svg";
        paragraphPage.style.color = "#A13333";
    } else{
        document.documentElement.setAttribute("data-theme", "light");
        imageTarget.src = "img/float.svg"
        paragraphPage.style.color = "black";
    }
}
toggleSwitch.addEventListener("change", switchTheme);

