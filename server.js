// Importeer het npm package Express (uit de door npm aangemaakte node_modules map)
// Deze package is geïnstalleerd via `npm install`, en staat als 'dependency' in package.json
import express from 'express'
import { Liquid } from 'liquidjs' 

// Maak een nieuwe Express applicatie aan, waarin we de server configureren
const app = express()

// Stel het poortnummer in waar Express op moet gaan luisteren
// Lokaal is dit poort 8000; als deze applicatie ergens gehost wordt, waarschijnlijk poort 80
app.set('port', process.env.PORT || 8000)

// Start Express op, gebruik daarbij het zojuist ingestelde poortnummer op
app.listen(app.get('port'), function () {
  // Toon een bericht in de console
  console.log(`Daarna kun je via http://localhost:${app.get('port')}/ jouw interactieve website bekijken.\n\nThe Web is for Everyone. Maak mooie dingen 🙂`)
})

// Maak werken met data uit formulieren iets prettiger
app.use(express.urlencoded({extended: true}))

// Gebruik de map 'public' voor statische bestanden (resources zoals CSS, JavaScript, afbeeldingen en fonts)
// Bestanden in deze map kunnen dus door de browser gebruikt worden
app.use(express.static('public'))

// Stel Liquid in als 'view engine'
const engine = new Liquid()
app.engine('liquid', engine.express())

// Stel de map met Liquid templates in
// Let op: de browser kan deze bestanden niet rechtstreeks laden (zoals voorheen met HTML bestanden)
app.set('views', './views')

// Hierdoor hoef je bij response.render() alleen de naam van de view op te geven
app.set('view engine', 'liquid')

const baseURL = 'https://fdnd-agency.directus.app/items/ctc_smartzone'

// // GET route voor de index/home
app.get('/', async function (request, response) {
    const apiResponse = await fetch(`${baseURL}?sort=city`)
    const apiResponseJSON = await apiResponse.json()

    // zorgt ervoor dat je op de home niet dubbele steden krijgt
    const uniqueCities = apiResponseJSON.data.filter((huidigeStad, huidigePositie, alleSteden) =>
    // Zoek de eerste plek waar deze stadsnaam voorkomt in de lijst
    // is de huidige plek gelijk aan de eerste plek? Dan is het de eerste keer dat we deze stad ziend dus bewaren
    // is de huidige plek anders, dan hebben we deze stad al eerder gezien dus weggooien
    huidigePositie === alleSteden.findIndex(c => c.city === huidigeStad.city)
    )
    
    response.render('index', {
      cities: uniqueCities
    });
})


// GET route naar formulier/quickscan
app.get('/quickscan', async function (request, response) {
    response.render('formulier', {
    });
})

// GET route naar stad detailpagina


app.get('/stad/:stadsnaam', async function (request, response) {
    const params = new URLSearchParams()
    // filter[city][_eq] -> geef alleen de steden waar city gelijk is aan de stadsnaam wordt meegegeven"
    params.set('filter[city][_eq]', request.params.stadsnaam)

    const apiResponse = await fetch(`${baseURL}?${params.toString()}`)
    const apiResponseJSON = await apiResponse.json()
    
    response.render('stad', {
      cities: apiResponseJSON.data,
      stadsnaam: request.params.stadsnaam
    });
})


// GET route naar quickscan-detailpagina
app.get('/quickscan-detailpagina/:id', async function (request, response) {
    const apiResponse = await fetch(`${baseURL}/${request.params.id}`)
    const apiResponseJSON = await apiResponse.json()
    
    response.render('quickscan-detailpagina', {
      city: apiResponseJSON.data
    });
})


// POST route van formulier/quickscan
app.post('/quickscan-detailpagina', async (request, response) => { 
  
    console.log(request.body)
    const postResponse = await fetch(
      'https://fdnd-agency.directus.app/items/ctc_smartzone', // API n point van quickscan formulier (hier kan je een GET en POST doen)
      {
        // dit is JSON object met de benodigde data om wat op te slaan
        method: 'POST', // methode post meegeven zodat de server weet dat er data opgeslagen moet worden
        headers: {
          'Content-Type': 'application/json',
        },
        
        body: JSON.stringify({
          // al deze dingen staan in het formulier
          city: request.body.city,
          time: request.body.time,
          address: request.body.address,
          long: request.body.long,
          lat: request.body.lat,
          status: request.body.status,
          monitoring_suitability: request.body.monitoring_suitability,
          smartzone_suitability: request.body.smartzone_suitability,
          traffic_sign: request.body.traffic_sign,
          comment: request.body.comment,
          length: request.body.length,
          // picture: pictureId,
          picture: null,
        })
      }
    )

    const postJSON = await postResponse.json()

    // response.redirect(`/nieuws/${request.params.slug}`) // als de post gelukt is eeen redirect naar de get route VAN HET NIEUWA ARTIKEL
    response.redirect(`/quickscan-detailpagina/${postJSON.data.id}`)
})