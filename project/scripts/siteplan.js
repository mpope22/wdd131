const year = document.querySelector("#year");
document.getElementById("lastmodified").innerHTML = document.lastModified;
year.innerHTML = (new Date(document.lastModified)).getFullYear();