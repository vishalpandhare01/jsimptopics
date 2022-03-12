let stocks = {
    fruits : ["strawberry","graps","banana","apple"],
    liquid : ["water","ice"],
    holder : ["cone","cup","sttck"],
    toppings : ["chocolate", "peanutus"]
};
let is_shop_open = true

function time(ms){
    return new Promise((resolve,reject)=>{
        if(is_shop_open){
            setTimeout(resolve,ms)
        }
        else{
            reject(console.log("shop is closed"));
        }
    });
}

async function kitchen(){
    try{

        await time(2000);
        console.log(`${stocks.fruits[0]} was selcted`);
        
        await time(0000)
        console.log("start the production")

        console.log("cut the fruits")


        await time(1000)
        console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]}was added`)

        await time(1000)       
        console.log("start machine")
        
        await time(2000)
        console.log(`ice cream placed on ${stocks.holder[0]}`)


        await time(3000)
        console.log(`${stocks.toppings[0]} was selected`)

        await time(2000)
        console.log("serve  ice cream")
    }
    catch(error){
        console.log("customer left",error);
    } 
    finally{
        console.log("day ended,shop is closed");
    }
}

kitchen();