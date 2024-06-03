var name = prompt("Please enter your name");
var gender = prompt("Please enter your gender");
if(gender==="female"){
    alert("Welcome, Ms." +"  "+ name);
}
else if(gender==="male"){
    alert("Welcome, Mr." + "  "+ name);

}
else{
    alert("Welcome,"+"  " + name)
}

var order= prompt("Would you like to order: Donut,  Coffee, Ice cream or Bakery ")
alert("Your Order is being preaped, Please wait!")

console.log("Customer: " + name + ", Order: " + order)