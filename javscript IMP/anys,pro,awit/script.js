let stocks = {
    fruits : ["strawberry","graps","banana","apple"],
    liquid : ["water","ice"],
    holder : ["cone","cup","sttck"],
    toppings : ["chocolate", "peanutus"]
};
let order = (fruit_name,call_production)=>{
    setTimeout(()=>{
        console.log(`${stocks.fruits[fruit_name]} was selected`)   //backtick behind 1 key//
        call_production();
    },2000);   
};
let production = () =>{
    setTimeout(() =>{
        console.log("production has started")
        setTimeout(()=>{
            console.log("the fruit has been chopped")
            setTimeout(()=>{
                console.log(`${stocks.liquid[0]} and  ${stocks.liquid[1]} was added`);
                setTimeout(()=>{
                    console.log("the mmachine was started");
                    setTimeout(()=>{
                        console.log(`ice cream was placed on ${stocks.holder[0]}`);
                        setTimeout(()=>{
                            console.log(`${stocks.toppings[0]}was added as toppings`);
                            setTimeout(() => {
                                console.log("serve ice cream")
                            }, 2000);
                        },3000)
                    },2000)
                })
            },1000)
        },2000)
    },0000)    
}; 
order(0,production);