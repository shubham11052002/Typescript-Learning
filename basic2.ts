//type alias
type User = {
    name: string;
    age: number;
    mobile?: number | string;
}

type Employe = User & {
    address: string;
}

let emp2: Employe = {
    name: "Akshay singh",
    age: 21,
    mobile: "",
    address: "delhi",
}
console.log(emp2)


// interface
interface obj1 {
    location: string;
    email: string;
}

interface obj2 extends obj1 {
    objId: number | string;
}
let objResult: obj2 = { location: "ghaziabad", email: "shubham@gmail.com", objId: 28734 };
console.log(objResult);

// function overloading
function abc(a: number): void;
function abc(a: number, b: string): number | string;

function abc(a: any, b?: any): void | number | string {
    if (typeof a === "number" && typeof b === "undefined") {
        console.log("hello this is running abc 1st function");
    } else if (typeof a === "number" && typeof b === "string") {
        console.log("hello this is running abc 2nd function");
    } else {
        console.log("Something went wrong");
    }
}
abc(12);
abc(12, "Shubham Sharma")


// FOR LOOP
let i2: number = 10;
for (let i: number = 1; i <= i2; i++) {
    console.log(i2 + " * " + i + " = " + i2 * i);
}