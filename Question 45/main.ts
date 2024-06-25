//Cars: Write a function that stores information about a car in a Object. 
//The function should always receive a manufacturer and a model name. It should then accept
// an arbitrary number of keyword arguments. Call the function with the required information 
//and two other name-value pairs, such as a color or an optional feature. Print the Object that’s 
//returned to make sure all the information was stored correctly.

import { features } from "process";

function storeCarInfo(manufacturer: string, modelname : string , ...extraOption: { [key : string]: any } []):
Object {

    const CarInfo = {
        manufacturer,
        modelname,
        ...Object.assign({}, ...extraOption)
    }

    return CarInfo;
};

let answer = storeCarInfo("honda", "civic", {color: "black"},{features: ["navigation", "power window"]})
console.log(answer);