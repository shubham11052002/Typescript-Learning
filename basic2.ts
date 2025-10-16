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

