'use strict'

var gMap

function onInit() {
    renderPlaces()
}

function renderPlaces() {
    let strHTML = getPlaces().map(place => 
        `<li>
           <span>${place.name}</span>
           <button onclick="onRemovePlace('${place.id}')">x</button>
           <button onclick="onPanToPlace('${place.id}')">Go</button>
        </li>`
    ).join('')
    document.querySelector('ul').innerHTML = strHTML
}

function onRemovePlace(placeId) {
    removePlace(placeId)

    renderPlaces()
}

function onPanToPlace(placeId) {
    const { lat, lng, zoom } = getPlaceById(placeId)
    gMap.setCenter({ lat, lng })
    gMap.setZoom(zoom)
}