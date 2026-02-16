import 'https://unpkg.com/leaflet';

import { MarkerManager } from './markers.js'

export function setItinerary(itinerary_id){
    return itineraryFloodcast()
}

function itineraryFloodcast(){
    var markerManager = new MarkerManager({add_markers_at_init:false, show_next_marker:false});

    markerManager.addMarker({
        latlng : [48.87093435936717, 2.401507612325875],
        title : "Départ Poincaré",
        mp3: "./assets/audio/floodcast/test_1.mp3"
    })

    markerManager.addMarker({
        latlng :  [48.84424056094156, 2.3286706794695844],
        title : "Gentiane",
        mp3: "./assets/audio/floodcast/test_2.mp3"
    })

    markerManager.addMarker({
        latlng :  [48.844912305740074, 2.337004121683637],
        title : "Luco 1",
        mp3: "./assets/audio/floodcast/test_2.mp3"
    })

    markerManager.addMarker({
        latlng :  [48.84716816193929, 2.335802030723504],
        title : "Luco 2",
        mp3: "./assets/audio/floodcast/test_2.mp3"
    })

    markerManager.addMarker({
        latlng :  [48.830815935827715, 2.4057119265749005],
        title : "Foire du Trône",
        mp3: "./assets/audio/floodcast/test_2.mp3"
    })

    markerManager.addMarker({
        latlng :  [48.846142819245436,2.3144033094398164],
        title : "Necker",
        mp3: "./assets/audio/floodcast/test_2.mp3"
    })

    markerManager.addMarker({
        latlng :  [48.834007263183594,2.3131866455078125],
        title : "Coloc Bout",
        mp3: "./assets/audio/floodcast/test_2.mp3"
    })

    markerManager.addMarker({
        latlng :  [48.85228417681764,2.3388431208483462],
        title : "Odéon",
        mp3: "./assets/audio/floodcast/test_2.mp3"
    })

    markerManager.addMarker({
        latlng :  [48.855939708428664,2.316001046706906],
        title : "Musée Rodin",
        mp3: "./assets/audio/floodcast/test_2.mp3"
    })

    markerManager.addMarker({
        latlng :  [48.8814654,2.3411327],
        title : "PDD",
        mp3: "./assets/audio/floodcast/test_2.mp3"
    })
    
    return markerManager
}
