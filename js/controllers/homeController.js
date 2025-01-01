'use strict'

function onInit() {
    renderHome()
}

function renderHome() {
    const prefs = loadFromStorage('user-preferences')
    console.log(prefs)
    if (!prefs) return

    document.querySelector('.email').innerText = prefs.email
    
    document.querySelector('body').style.background = prefs.background
    document.querySelector('body').style.color = prefs.color
    
    document.querySelector('.bday').innerText = prefs.bday
    document.querySelector('.btime').innerText = prefs.btime

}