//Your Own Array: Think of your favorite mode of transportation, 
//such as a motorcycle or a car, and make a list that stores several examples. 
//Use your list to print a series of statements about these items, such as “I would like to own a Honda motorcycle.”

let favorite_Transportation: string[] = ["Car", "Bus" , "Motorcycle" , "Train"]

for (let i = 0; i < favorite_Transportation.length; i++) {
    console.log("I would like to own a " + favorite_Transportation[i]);
}

