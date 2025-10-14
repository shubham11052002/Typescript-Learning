
    function getTotal(numbers:number[]):number{
    return numbers.reduce((acc,item)=>{
        return acc + item;
    },0);
    }

    console.log(getTotal([2,3,4,]));