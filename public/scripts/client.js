
let deButton = document.querySelector("button")
let deLatTextarea = document.querySelector("#lat")  // breedtegraad 
let deLongTextarea = document.querySelector("#long")  // lengtegraad

// button tonen als er JS is
deButton.hidden = false
// niet tikken als er JS is
deLatTextarea.readOnly = true
deLongTextarea.readOnly = true
// leeg maken omdat browsers anders de laatste waarde alvast invullen
deLatTextarea.value = ""
deLongTextarea.value = ""
// andere instructie als er JS is
deLatTextarea.placeholder = "druk op de button"
deLongTextarea.placeholder = "druk op de button"

// op button klikken om de coördinaten op te halen
deButton.addEventListener("click", getLocation)


// bron: https://medium.com/@komalbhatia2305/getting-users-current-location-using-javascript-8b980fec8ef9
// hiervoor moet de gebruiken toestemming geven dat locatiegegevens opgehaald moegen worden
// dat moet ergens gecheckt worden of dat zo is --> dat doe ik volgend jaar


// locatie opvragen
function getLocation() {
    if (navigator.geolocation) {
        // als het lukt om de locatie op te halen dan wordt de showPosition uitgevoerd
        navigator.geolocation.getCurrentPosition(showPosition);
    } else {
        alert("Geen ondersteuning beschikbaar");
        // bij geen support weer terug naar textarea die handmatig ingevuld kan worden --> dat doe ik ook volgend jaar
    }
}

// coördinaten van de locatie opvragen
// als argument wordt de location gebruikt die de getCurrentPosition method heeft opgehaald
function showPosition(location) {
    const userCoordinates = {
        long: location.coords.longitude,
        lat: location.coords.latitude,
    }

    // modernert - meer liquid-ish - dit was. nog voordat er twee textareas was
    // deTextarea.value = `lat: ${userCoordinates.lat}\nlon: ${userCoordinates.lon}`;
    // maar ik doe het lekker toch zo - vind ik makkelijker lezen
    // deTextarea.value = "lat: " + userCoordinates.lat + "\nlon: " + userCoordinates.lon;

    deLongTextarea.value = userCoordinates.long
    deLatTextarea.value = userCoordinates.lat
}