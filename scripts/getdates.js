const year = document.querySelector("#year");
document.getElementById("lastmodified").innerHTML = document.lastModified;
// document.getElementById("year").innerHTML = (new Date(document.lastModified)).getFullYear();
year.innerHTML = (new Date(document.lastModified)).getFullYear();