// Suppose You have an array of object  
// var itemsArray = [ 
// {name:”juice”,price:”50”, quantity:”3”}, 
// {name:”cookie”,price:”30”, quantity:”9”}, 
// {name:”shirt”,price:”880”, quantity:”1”}, 
// {name:”pen”,price:”100”, quantity:”2”}]; 
// Calculate total price of each item and all items


var itemsArray = [ 
{name: "juice",price:"50", quantity:"3"}, 
{name: "cookie",price:"30", quantity:"9"}, 
{name: "shirt",price:"880", quantity:"1"}, 
{name:"pen",price:"100", quantity:"2"}
]; 

var allItemsTotalPrice = 0

itemsArray.forEach(items => {
    var totalPricePerItem = items.price * items.quantity

    console.log(`${items.name} : ${totalPricePerItem}`)
    
    allItemsTotalPrice += totalPricePerItem
});


console.log(`${allItemsTotalPrice}`)