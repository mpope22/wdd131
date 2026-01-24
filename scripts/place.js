const year = document.querySelector("#year");
document.getElementById("lastmodified").innerHTML = document.lastModified;
year.innerHTML = (new Date(document.lastModified)).getFullYear();
const wind = 5;
const temp = 49;
if(temp<=50 && wind > 3)
{
    function getwindchill(wind, temp){
        let windchill = (35.74 + (0.6215 * temp) - (35.75 * Math.pow(wind, 0.16)) + (0.4275 * temp * Math.pow(wind, 0.16))).toFixed(2);
        document.getElementById("windchill").innerHTML = windchill;
        return windchill;
    }
    getwindchill(wind,temp);
}
else{
    document.getElementById("windchill").innerHTML = "N/A";
}