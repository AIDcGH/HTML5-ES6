'use strict'

const PREF_KEY = 'user-preferences'
const gUser = createUser()

function createUser() {
    let user = loadFromStorage(PREF_KEY)

    if (!user) user = {
        email: '',
        background: '',
        color: '',
        age: '',
        bday: '',
        btime: ''
    }
    return user
}

function getUser() {
    return gUser
}

function updateUser(elEmail, elBackground, elColor, elAge, elBday, elBtime) {
    gUser.email = elEmail.value
    gUser.background = elBackground.value
    gUser.color = elColor.value
    gUser.age = elAge.value
    gUser.bday = elBday.value
    gUser.btime = elBtime.value

    saveToStorage(PREF_KEY, gUser)
}
