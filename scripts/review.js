let reviewCount = Number(localStorage.getItem("reviewCount")) || 0;
reviewCount++;
localStorage.setItem("reviewCount", reviewCount);
document.getElementById("counterDisplay").textContent = reviewCount;
document.getElementById("lastmodified").innerHTML = document.lastModified;