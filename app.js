user_input = []

var name = prompt("Please enter your name");
user_input.push(name)
var gender = prompt("Please enter your gender");
while(gender!=="female" && gender!=="male"){
    gender = prompt("Please enter your gender");
}
user_input.push(gender)

if (gender=="male"){
    alert("Welcome, Mr." + "  "+ name);
}

else  {
    alert("Welcome, Ms." +"  "+ name);
}


var order= prompt("Would you like to order: Donut,  Coffee, Ice cream or Bakery ")
alert("Your Order is being preaped, Please wait!")
user_input.push(typeof(order), order )



console.log("Customer: " + name + ", Order: " + order)

console.log("user's inputs", user_input)


for (let i=0; user_input.length<i;i++ ){
    console.log(user_input[i])
}