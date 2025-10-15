  /*
    function getTotal(numbers:number[]){
    return numbers.reduce((acc,item)=>{
        return acc + item;
    },0);
    }

    console.log(getTotal([2,3,4,]));

    let name1:string = 'Shubham Sharma';
    console.log(name1);
    const arr:Array<number>=[4,5,6];
    arr.map((items)=>{
        console.log(items);
    });
    

    // Printing table by function
    let val1:number = 10;
    function printTable(val1:number){
      for(let i:number=1;i<=10;i++){
        console.log(val1 + " * " + i + " = " + val1*i);
      }
    }
    printTable(val1);  */


    // type alias
    type User = {
      name:string;
      age:number;
      mob?:number,
    }

    const userData: User = {
      name:'12',
      age:12,
      mob:2987482,
    }
    console.log(userData);