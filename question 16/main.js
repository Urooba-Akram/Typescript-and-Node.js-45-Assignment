//More Guests: You just found a bigger dinner table, 
//so now more space is available. Think of three more 
//guests to invite to dinner.
//• Start with your program from Exercise 15. Add a print statement to the end 
//of your program informing people that you found a bigger dinner table.
//• Add one new guest to the beginning of your array.
//• Add one new guest to the middle of your array. 
//• Use append() to add one new guest to the end of your list. 
//• Print a new set of invitation messages, one for each person in your list.
var GuestList = ["Asad", "Iqra", "Afsheen"];
var message = "Dear, {}! Great News, we found a bigger dinner table, so now we can invite more guests.";
//Adding one new guest to the bignning of the array
GuestList.unshift("Fehmida");
//Adding one new guest to the middle of the array
GuestList.splice(2, 0, "Akram");
//Adding one new guest to the end of the array
GuestList.push("Urooba");
for (var i = 0; i < GuestList.length; i++) {
    console.log((message.replace("{}", GuestList[i])));
}
