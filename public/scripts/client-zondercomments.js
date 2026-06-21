// COORDINATEN BUTTON
let deButton = document.querySelector("button")
let deLatTextarea = document.querySelector("#lat")  
let deLongTextarea = document.querySelector("#long") 

deButton.hidden = false
deLatTextarea.readOnly = true
deLongTextarea.readOnly = true
deLatTextarea.value = ""
deLongTextarea.value = ""
deLatTextarea.placeholder = "druk op de button"
deLongTextarea.placeholder = "druk op de button"

deButton.addEventListener("click", getLocation)

function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else {
        alert("Geen ondersteuning beschikbaar");
    }
}

function showPosition(location) {
    const userCoordinates = {
        long: location.coords.longitude,
        lat: location.coords.latitude,
    }

    deLongTextarea.value = userCoordinates.long
    deLatTextarea.value = userCoordinates.lat
}