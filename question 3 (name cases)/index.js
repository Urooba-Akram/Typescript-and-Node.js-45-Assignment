var personName = "Mrs asad khan";
console.log(personName.toLowerCase());
console.log(personName.toUpperCase());
var personNameSplitted = personName.split(" ");
//split
for (var i = 0; i < personNameSplitted.length; i++) {
    var character = personNameSplitted[i];
    personNameSplitted[i] = character.charAt(0).toUpperCase() + character.slice(1).toLowerCase();
}
var toTitleCase = personNameSplitted.join(" ");
console.log(toTitleCase);
