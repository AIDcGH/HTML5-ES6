'use strict'

function saveToStorage(key, value) {
    var json = JSON.stringify(value)
    localStorage.setItem(key, json)
}

function loadFromStorage(key) {
    console.log(key, json)
    var json = localStorage.getItem(key)
    return JSON.parse(json)
}