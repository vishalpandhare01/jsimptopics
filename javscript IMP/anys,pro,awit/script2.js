let stocks = {
    fruits : ["strawberry","graps","banana","apple"],
    liquid : ["water","ice"],
    holder : ["cone","cup","sttck"],
    toppings : ["chocolate", "peanutus"]
};
let is_shop_open = true;
let order = (time,work) => {
    return new Promise((resolve,reject)=>{
        if(is_shop_open){           
            setTimeout(()=>{
                resolve(work())
            },time)           
        }
        else{
            reject(console.log("our shope is closed"))
        }
    })
}
order(2000,()=>console.log(`${stocks.fruits[0]} was selected`))
.then(()=>{
    return order(0000,()=>console.log("production has started")
    );
})
.then(()=>{
    return order(2000,()=>console.log("the fruits was chopped"))
})
.then(()=>{
    return order(1000,()=>{
        console.log(`${stocks.liquid[0] }and ${stocks.liquid[1]}was selected`)
    })
})
.then(()=>{
    return order(1000,()=>console.log("start the machine"))
})
.then(()=>{
    return order(2000,()=>{
        console.log(`ice cream was placed on ${stocks.holder[0]}`)
    })
})
.then(()=>{
    return order(3000,()=>{
        console.log(`${stocks.toppings}was selected`)
    })
})
.then(()=>{
    return order(2000,()=>console.log("ice cream was served"))
})
.catch(()=>{
    console.log("customer left ")
})
.finally(()=>{
    console.log("day endded,shop is closed")
})