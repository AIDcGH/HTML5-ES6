'use strict'

const PREF_KEY = 'user-preferences'
const gPrefs = createUserPrefs()

function createUserPrefs() {
    let prefs = loadFromStorage(PREF_KEY)

    if (!prefs) prefs = {
        email: '',
        background: '',
        color: '',
        age: '',
        bday: '',
        btime: ''
    }
    return prefs
}

function getPrefs() {
    return gPrefs
}

function updatePrefs(elEmail, elBackground, elColor, elAge, elBday, elBtime) {
    gPrefs.email = elEmail.value
    gPrefs.background = elBackground.value
    gPrefs.color = elColor.value
    gPrefs.age = elAge.value
    gPrefs.bday = elBday.value
    gPrefs.btime = elBtime.value

    saveToStorage(PREF_KEY, gPrefs)
}
