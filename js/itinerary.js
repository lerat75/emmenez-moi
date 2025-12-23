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
        latlng : [48.8686928, 2.4017597],
        title : "Test pelleport",
        mp3: "./assets/audio/floodcast/test_2.mp3"
    })
    
    markerManager.addMarker({
        latlng : [48.8674255, 2.4006808],
        title : "Test dupont de l eure",
        mp3: "./assets/audio/floodcast/test_3.mp3"
    })

    markerManager.addMarker({
        latlng : [48.87577998748021, 2.3896385569227636],
        title : "Eglise Saint-Jean Baptiste",
        mp3: "./assets/audio/floodcast/4.mp3"
    })

     markerManager.addMarker({
        latlng : [48.87453544489607, 2.3861847778379457],
        title : "Belleville/Melingue",
        mp3: "./assets/audio/floodcast/5.mp3"
    })
    
    markerManager.addMarker({
        latlng : [48.8442099, 2.3286613],
        title : "La Gentiane",
        mp3: "./assets/audio/floodcast/6.mp3"
    })

    markerManager.addMarker({
        latlng : [48.87833568063956, 2.381797451840424],
        title : "Metro Buttes Chaumont",
        mp3: "./assets/audio/floodcast/7.mp3"
    })

    markerManager.addMarker({
        latlng : [48.87932714671947, 2.384514603478378],
        title : "Entree Parc",
        mp3: "./assets/audio/floodcast/8.mp3"
    })

    markerManager.addMarker({
        latlng : [48.880304685342324, 2.3831266948946546],
        title : "Pont des Suicides",
        mp3: "./assets/audio/floodcast/9.mp3"
    })

    markerManager.addMarker({
        latlng : [48.88389075204208, 2.3845324479934162],
        title : "Eglise Orthodoxe",
        mp3: "./assets/audio/floodcast/10.mp3"
    })

     markerManager.addMarker({
        latlng : [48.88497319280272, 2.383255694718338],
        title : "Etape avant Pont de Crimée",
        mp3: "./assets/audio/floodcast/11.mp3"
    })

    markerManager.addMarker({
        latlng : [48.88841378644028, 2.379405710378811],
        title : "Pont de Crimée",
        mp3: "./assets/audio/floodcast/12.mp3"
    })

    markerManager.addMarker({
        latlng : [48.88931749759807, 2.381937537218894],
        title : "Etape avant la Vilette",
        mp3: "./assets/audio/floodcast/13.mp3"
    })

    markerManager.addMarker({
        latlng : [48.891419001674606, 2.3860153261721924],
        title : "La vilette",
        mp3: "./assets/audio/floodcast/14.mp3"
    }) 
    return markerManager
}
