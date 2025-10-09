
let appleprice=30;//price of one apple in shillings
let bananaprice=10;//price of one banana in shillings
let mangoprice=25;//price of one mango in shillings
function calculatetotal(apples,bananas,mangoes){//multiply quantity by price and add them together
    let total=(apples*appleprice)+(bananas*bananaprice)+(mangoes*mangoprice);
return total;}
let totalcost=calculatetotal(2,3,1);//buying 2 apples,3bnanas,1mango
console.log("total cost is:"+totalcost+"shillings");