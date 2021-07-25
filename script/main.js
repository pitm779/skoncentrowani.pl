const navUl = document.getElementById("nav-ul");
const navBTN = document.getElementById("nav-btn");

navBTN.addEventListener("click", () => {
	navUl.classList.toggle("show");
	navBTN.classList.toggle("open");
});
