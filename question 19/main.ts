let GuestList : string[] = ["Fehmida", "Asad" ,"Akram", "Iqra" , "Afsheen", "Urooba"]
 
let message : string = "Dear, {}! You are still invited to the dinner.";



//sorry msg to guest for not inviting
// console.log('\nSorry we can not arrange big table,only two peoples will be inited.');

//yaha pr mne guest remove kiye hy
while(GuestList.length > 2){
    let RemoveGuest = GuestList.pop()
    // console.log(`sorry ${RemoveGuest}, You are note invited for dinner.`);
}

//hamare bachy howe 2 invited guest
//for(let i=0 ; i< GuestList.length; i++){
    //console.log((message.replace("{}", GuestList[i])))
//}

//mene sare guest array se remove kr diye
GuestList.splice(0, 2);
console.log(GuestList);

//Dinner Guests: Working with one of the programs from Exercises 14 through 18, 
//print a message indicating the number of people you are inviting to dinner.


console.log(`total number of guest are: ${GuestList.length}`);