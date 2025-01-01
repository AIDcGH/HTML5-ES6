'use strict'

function onInit() {
    renderPrefs()
}

function renderPrefs() {
    const { email, background, color, age, bday, btime } = getUser()

    if (email) document.querySelector('input[name="email"]').value = email

    if (background) document.querySelector('input[name="background"]').value = background
    if (color) document.querySelector('input[name="color"]').value = color
   
    if (age) { 
        document.querySelector('input[name="age"]').value = age
        showAge(age)
    }
    if (bday) document.querySelector('input[name="bday"]').value = bday
    if (btime) document.querySelector('input[name="btime"]').value = btime
}

function showAge(val) {
    document.querySelector('.s-age').innerHTML = val
}

function onSubmit(ev) {
    ev.preventDefault()
    updateUser(...document.querySelectorAll('input'))
}