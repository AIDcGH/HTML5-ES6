'use strict'

const PLACES_KEY = 'user-places'

var gPlaces = _createPlaces()

function getPlaces() {
    return gPlaces
}

function removePlace(placeId) {
    gPlaces.splice(gPlaces.findIndex(place => place.id === placeId), 1)

    _saveToLocal()
}

function addPlace(name, lat, lng, zoom) {
    gPlaces.push(_createPlace(name, lat, lng, zoom))

    _saveToLocal()
}

function getPlaceById(placeId) {
    return gPlaces.find(place => place.id === placeId)
}

function _createPlace(name = `place${gPlaces.length + 1}`, lat, lng, zoom) {
    return { id: makeId(), name, lat, lng, zoom }
}

function _createPlaces() {
    return loadFromStorage(PLACES_KEY) || [_createPlace('p1', 1, 1, 1), _createPlace('p2', 2, 2, 2)]
}

function _saveToLocal() {
    saveToStorage(PLACES_KEY, gPlaces)
}