
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
    