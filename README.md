> Ontwerp en maak een data driven online concept voor een opdrachtgever

# Coding the Curbs
Coding the Curbs is 3 jaar geleden opgericht in Nederland. De diensten van het bedrijf worden gebruikt in 20 steden en 9 landen. Via een app of een scanbare paal op straat reserveer je vooraf een tijdslot om de plek te kunnen gebruiken. Met hun eigen grondsensoren en een digitaal dashboard meet het bedrijf precies wanneer en hoe lang de plekken bezet zijn. Zo helpen ze stadsbesturen om de druk op die plekken te verlichten.

#### Vraag van de opdrachtgever
Het doel is om voor Coding the Curbs het makkelijker te maken om een quickscan te doen door middel van een formulier in te vullen met data en dat in een overzicht/dashboard weer te geven. Door dit overzicht moet het interactiever en duidelijker worden voor ambtenaren, maar ook voor gebruikers en admins om goed inzicht te krijgen in wat de problemen zijn.

Check [hier](https://proof-of-concept-zqs1.onrender.com/) de website.

## Inhoudsopgave Readme

  * [Beschrijving](#beschrijving)
  * [Kenmerken](#kenmerken)
  * [Toegankelijkheid](#kenmerken)
  * [Installatie](#installatie)
  * [Bronnen](#bronnen)
  * [Licentie](#licentie)

## Beschrijving
<!-- Bij Beschrijving staat kort beschreven wat voor project het is en wat je hebt gemaakt -->
<!-- Voeg een mooie poster visual toe 📸 -->
<!-- Voeg een link toe naar je live site 🌐-->

De website bestaat uit 4 pagina's
1. Home - overzicht van alle steden
2. Stad - hier heb je een overzicht van alle locaties die er zijn per stad
3. Quickscan - dit is de pagina van de quicscan, waar je een formulier krijgt die ingevuld moet worden
4. Detailpagina - dit is de pagina die alle informatie laat zien van de quickscan per locatie per stad

Voordat ik alle pagina's ging bouwen heb ik eerst verschillende schetsen ontworpen in [figma](https://www.figma.com/design/divwtZzotuqRAUEEJBbniX/coding-the-curbs?node-id=0-1&p=f&t=HB2k9n5RAMQ6qBOs-0) en vanuit daar ben ik code gaan schrijven.
 
<img width="180" height="360" alt="Scherm_afbeelding 2026-06-18 om 19 41 02 1" src="https://github.com/user-attachments/assets/4d154f94-ee47-400b-80ac-96e9b79e84c0" />
<img width="180" height="360" alt="Scherm_afbeelding 2026-06-18 om 19 41 44 1" src="https://github.com/user-attachments/assets/58379dd4-cc35-48ad-84e3-5b482fbbf23c" />
<img width="180" height="360" alt="Scherm_afbeelding 2026-06-18 om 19 42 28 1" src="https://github.com/user-attachments/assets/ee17de73-35ee-46da-9b03-0677a3ce10f8" />
<img width="180" height="360" alt="Scherm_afbeelding 2026-06-18 om 19 43 04 1" src="https://github.com/user-attachments/assets/71b53391-ed5b-405f-b7cf-db541554d94f" />


## [Coordinaten](https://github.com/lynnvdbo/proof-of-concept/issues/14)

Een van de velden die je moet invullen zijn de coordinaten. Om de coordinaten op te halen heb ik gebruik gemaakt van geolocatie. Hievoor heb ik een knop gemaakt en zodra de gebruiker daar op klikt komen de lengte en breedte graad vanzelf in het tekstvak te staan. De gebruiker moet eerst de browser wel toegang geven tot locatie.

https://github.com/lynnvdbo/proof-of-concept/blob/3bee14b310b6b789458bf68eb6fa9ec8af92d7be/public/scripts/client.js#L27-L36

Met readOnly kan de gebruiker niet zelf de coordinaten (peprongeluk) veranderen.
https://github.com/lynnvdbo/proof-of-concept/blob/3bee14b310b6b789458bf68eb6fa9ec8af92d7be/public/scripts/client.js#L9-L10

## Als javascript het niet doet

Wanneer javascript het niet doet verdwijnt de knop en komt in het tekstvak te staan "zoek bijv. in google maps de coordinaten op". De gebruiker kan dan alsnog de tekstvelden wel invullen alleen dan niet automatisch met een knop maar moet het dan handmatig doen.

<img width="382" height="203" alt="Scherm­afbeelding 2026-06-18 om 21 02 47" src="https://github.com/user-attachments/assets/989846a6-2dea-48a1-86f5-1ff5edd87630" />

## Dark modus

Ik heb ook een dark modus toegevoegd. Dus wanneer iemand heeft aangegeven dat hij liever dark modus wilt krijgt hij de darkmodus versie te zien. Dit heb ik gedaan met 
[@media/prefers-color-scheme](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/At-rules/@media/prefers-color-scheme) gedaan.

<img width="180" height="360" alt="Scherm_afbeelding 2026-06-18 om 21 21 11 1" src="https://github.com/user-attachments/assets/c4cc9cb8-4af2-4181-9379-426b5eb0371f" />
<img width="180" height="360" alt="Scherm_afbeelding 2026-06-18 om 21 21 35 1" src="https://github.com/user-attachments/assets/637d8ca3-93da-4c64-a3ae-70427ffde85b" />
<img width="180" height="360" alt="Scherm_afbeelding 2026-06-18 om 21 21 54 1" src="https://github.com/user-attachments/assets/57c0e285-c354-45f4-bcc0-27999bad0197" />
<img width="180" height="360" alt="Scherm_afbeelding 2026-06-18 om 21 22 17 1" src="https://github.com/user-attachments/assets/1878bd63-3c5a-4fdf-af84-0d3ebf0cdaf9" />

https://github.com/lynnvdbo/proof-of-concept/blob/3bee14b310b6b789458bf68eb6fa9ec8af92d7be/public/assets/styles/stylesheet.css#L83-L92

## Kenmerken
<!-- Bij Kenmerken staat welke technieken zijn gebruikt en hoe. Wat is de HTML structuur? Wat zijn de belangrijkste dingen in CSS? Wat is er met JS gedaan en hoe? Misschien heb je iets met NodeJS gedaan, of heb je een framwork of library gebruikt? -->
De website is gebouwd met HTML, CSS en JS, NodeJS, Express, JSON en Liquid, volgens het principe van progressive enhancement

## Toegankelijk

Om de toegankelijkheid van de website heb ik een [WCAG Audit](https://github.com/lynnvdbo/proof-of-concept/issues/22) en een [Performance Audit](https://github.com/lynnvdbo/proof-of-concept/issues/19) test gedaan en heb ik een [user test](https://github.com/lynnvdbo/proof-of-concept/issues/8#issuecomment-4706919520)op het formulier gedaan.

## Installatie
<!-- Bij Installatie staat hoe een andere developer aan jouw repo kan werken -->
1. Clone als eerst deze repository
2. Open hem in VSCodium of een code editor
3. Open dan de terminal en type npm install
4. Start vervolgens de website door npm start in te typen
5. Open vervolgens http://localhost:8000 om de website te zien in de browser

## Sprint review 18-06-26
De opdrachtgever was blij met het resultaat. En vond het leuk om te zien hoe iedereen wat anders had gemaakt.

Een tip voor de volgende keer om een klein beetje het proces te laten zien. Dus bijvoorbeeld eerst even snel je schetsen laten en te vertellen hoe je op bepaalde keuzes bent gekomen, zodat de opdrachtgever ook beter de ideeen snapt, wanneer je je website laat zien.

Daarnaast vonden ze het idee van Maarten handig, dat wanneer je een quickscan hebt gemaakt je niet gelijk naar de quickscan gaat, maar op de pagina blijft en het formulier na een paar seconden leeg gaat, zodat je dan snel weer een nieuwe quickscan kan maken. 

## Bronnen
[Mijn figma bestand](https://www.figma.com/design/divwtZzotuqRAUEEJBbniX/coding-the-curbs?node-id=0-1&p=f&t=HB2k9n5RAMQ6qBOs-0)
https://medium.com/@komalbhatia2305/getting-users-current-location-using-javascript-8b980fec8ef9
https://fdnd-agency.directus.app/items/ctc_smartzone
https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/At-rules/@media/prefers-color-scheme

## Licentie

This project is licensed under the terms of the [MIT license](./LICENSE).
