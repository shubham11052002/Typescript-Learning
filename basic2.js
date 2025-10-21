var emp2 = {
    name: "Akshay singh",
    age: 21,
    mobile: "",
    address: "delhi",
};
console.log(emp2);
var objResult = { location: "ghaziabad", email: "shubham@gmail.com", objId: 28734 };
console.log(objResult);
function abc(a, b) {
    if (typeof a === "number" && typeof b === "undefined") {
        console.log("hello this is running abc 1st function");
    }
    else if (typeof a === "number" && typeof b === "string") {
        console.log("hello this is running abc 2nd function");
    }
    else {
        console.log("Something went wrong");
    }
}
abc(12);
abc(12, "Shubham Sharma");
// FOR LOOP
var i2 = 10;
for (var i = 1; i <= i2; i++) {
    console.log(i2 + " * " + i + " = " + i2 * i);
}
