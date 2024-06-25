//Guest List: If you could invite anyone, living or deceased, 
//to dinner, who would you invite? Make a list that includes at least 
//three people you’d like to invite to dinner. 
//Then use your list to print a message to each person, inviting them to dinner

let Guest: string[] = ["Asad" , "Iqra" , "Faiza"]

let message : string = "Hi, {}! I would like to ivite you to dinner." 

for (let i=0; i < Guest.length ; i++){
    console.log (message.replace("{}",Guest[i]))
}