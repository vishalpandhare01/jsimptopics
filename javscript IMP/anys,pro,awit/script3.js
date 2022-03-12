let stocks = {
    fruits : ["strawberry","graps","banana","apple"],
    liquid : ["water","ice"],
    holder : ["cone","cup","sttck"],
    toppings : ["chocolate", "peanutus"]
};
let is_shop_open = true
let toppings_choice = ()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(console.log("which topping would you love?"))
        },3000);
    });
};
async function kitchen(){
    console.log(" A ")
    console.log(" B ")
    console.log(" C ")

await toppings_choice()
    console.log(" D ")
    console.log(" E ")
}
kitchen();
console.log("doing the dishes ");
console.log("cleaning the table");
console.log("taking others order");