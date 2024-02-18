let jmeno = prompt("Zadej své křestní jméno bez diakritiky: ").trim()
let prijmeni = prompt("Zadej své příjmení bez diakritiky: ").trim()

let emailJmeno = jmeno.slice(0,3).toLowerCase()
let emailPrijmeni = prijmeni.slice(0,5).toLowerCase()

document.body.innerHTML += `Tvůj nový email je: ${emailPrijmeni}${emailJmeno}@fit.cvut.cz`