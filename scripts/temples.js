const year = document.querySelector("#year");
document.getElementById("lastmodified").innerHTML = document.lastModified;
year.innerHTML = (new Date(document.lastModified)).getFullYear();
const navmenu = document.getElementById('menu');
const hamburger = document.getElementById('hamburgericon');

hamburger.addEventListener('click', () => {
    navmenu.classList.toggle('show');
    hamburger.classList.toggle('change');
    const isOpen = navmenu.classList.contains('show');
    hamburger.setAttribute('aria-expanded', isOpen);
});