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
app.get('/stad', async function (request, response) {
    const apiResponse = await fetch(baseURL)
    const apiResponseJSON = await apiResponse.json()
    
    response.render('stad', {
      cities: apiResponseJSON.data
    });
})

// GET route naar quickscan-detailpagina
app.get('/quickscan-detailpagina', async function (request, response) {
    const apiResponse = await fetch(baseURL)
    const apiResponseJSON = await apiResponse.json()
    
    response.render('quickscan-detailpagina', {
      cities: apiResponseJSON.data
    });
})