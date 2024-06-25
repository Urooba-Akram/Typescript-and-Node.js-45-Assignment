let personName: string = "Mrs asad khan"

console.log(personName.toLowerCase());
console.log(personName.toUpperCase());

let personNameSplitted: string[] = personName.split(" ")

//split

for (let i = 0; i < personNameSplitted.length; i++) {
    let character =  personNameSplitted[i]

    personNameSplitted[i] = character.charAt(0).toUpperCase() + character.slice(1).toLowerCase()
}

let toTitleCase: string = personNameSplitted.join(" ")
console.log(toTitleCase)
