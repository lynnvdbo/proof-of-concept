
let deButton = document.querySelector("button")
let deTextarea = document.querySelector("textarea")

// button tonen als er JS is
deButton.hidden = false
// niet tikken als er JS is
deTextarea.readOnly = true 
// leeg maken omdat browsers anders de laatste waarde alvast invullen
deTextarea.value = "";
// andere instructie als er JS is
deTextarea.placeholder = "druk op de button";

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
        lat: location.coords.latitude,
        lon: location.coords.longitude,
    }

    // modernert - meer liquid-ish
    // deTextarea.value = `lat: ${userCoordinates.lat}\nlon: ${userCoordinates.lon}`;

    // maar ik doe het lekker toch zo - vind ik makkelijker lezen
        deTextarea.value = "lat: " + userCoordinates.lat + "\nlon: " + userCoordinates.lon;
}