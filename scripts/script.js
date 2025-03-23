const toggleButton = document.getElementById("toggle-dark-mode"); 
const html = document.querySelector("html"); 

toggleButton.addEventListener("click", () => {
    document.body.classList.toggle("dark-theme");
    html.classList.toggle("dark-mode");
});
