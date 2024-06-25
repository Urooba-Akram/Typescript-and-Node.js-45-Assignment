"use strict";
//Shrinking Guest List: You just found out that your new dinner 
//table won’t arrive in time for the dinner, and you have space for only two guests.
//• Start with your program from Exercise 16. Add a new line that prints a message 
//saying that you can invite only two people for dinner.
//• Remove guests from your list one at a time until only two names remain in your list. 
//Each time you pop a name from your list, print a message to that person letting 
//them know you’re sorry you can’t invite them to dinner.
//• Print a message to each of the two people still on your list, letting them know they’re still invited.
//• Remove the last two names from your list, so you have an empty list. 
//Print your list to make sure you actually have an empty list at the end of your program.
let GuestList = ["Fehmida", "Asad", "Akram", "Iqra", "Afsheen", "Urooba"];
let message = "Dear, {}! You are still invited to the dinner.";
//sorry msg to guest for not inviting
console.log('\nSorry we can not arrange big table,only two peoples will be inited.');
//yaha pr mne guest remove kiye hy
while (GuestList.length > 2) {
    let RemoveGuest = GuestList.pop();
    console.log(`sorry ${RemoveGuest}, You are note invited for dinner.`);
}
//hamare bachy howe 2 invited guest
for (let i = 0; i < GuestList.length; i++) {
    console.log((message.replace("{}", GuestList[i])));
}
//mene sare guest array se remove kr diye
GuestList.splice(0, 2);
console.log(GuestList);
