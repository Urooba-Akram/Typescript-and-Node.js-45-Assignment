//Greetings: Start with the array you used in Exercise 11, 
//but instead of just printing each person’s name, print a message to them. 
//The text of each message should be the same, 
//but each message should be personalized with the person’s name.
var friendNames = ["Afsheen", "Iqra", "Faiza", "Uroba"];
var message = "Hello, {}! We hope you're having a great day.";
for (var i = 0; i < friendNames.length; i++) {
    console.log(message.replace("{}", friendNames[i]));
}
