window.onload = function() {


// user_input = []
// function askGender() {
//     var gender;
//     while (gender !== "male" && gender !== "female") {
//         gender = prompt("Please enter your gender");
//     }
//     return gender;
// }

// var name = prompt("Please enter your name");
// user_input.push(name)
// var gender = askGender();
// user_input.push(gender)

// if (gender=="male"){
//     alert("Welcome, Mr." + "  "+ name);
// }

// else  {
//     alert("Welcome, Ms." +"  "+ name);
// }


// var order= prompt("Would you like to order: Donut,  Coffee, Ice cream or Bakery ")
// alert("Your Order is being preaped, Please wait!")
// user_input.push(typeof(order), order )



// console.log("Customer: " + name + ", Order: " + order)

// console.log("user's inputs", user_input)


// for (let i=0; user_input.length<i;i++ ){
//     console.log(user_input[i])
// }

     



   
    document.getElementById('form').addEventListener('submit', function(event) {
        // Prevent the form from submitting the usual way
        event.preventDefault();

        // Get the values from the form fields
        var userName = document.getElementById('fname').value;
        var userAge = document.getElementById('aname').value;
        var gender = document.querySelector('input[name="gender"]:checked')?.value || 'Not specified';
        var orders = Array.from(document.querySelectorAll('input[name="order"]:checked')).map(checkbox => checkbox.value).join(', ');
        var drinkType = document.querySelector('input[name="type"]:checked')?.value || 'Not specified';

        // Display the values under the form
        document.getElementById("result").innerHTML = 
        "User Name: " + userName + "<br>" + 
        "User Age: " + userAge + "<br>" + 
        "Gender: " + gender + "<br>" + 
        "Orders: " + orders + "<br>" + 
        "Drink Type: " + drinkType;
    })

            
          
  
//adding paragraph

document.getElementById("new").innerHTML = "Our website offers a variety of delicious items for you to enjoy. Whether you're craving a donut, coffee, ice cream, or bakery items, we've got you covered!";
    

// var userInfoDiv = document.getElementById("user-info");
// var newDiv = document.createElement("div");
// var paragraph = document.createElement("p");
// paragraph.textContent = "User Information:";

// var ol = document.createElement("ol");

// user_input.forEach(function(answer) {
//     var li = document.createElement("li");
//     li.textContent = answer;
//     ol.appendChild(li);
// });

// newDiv.appendChild(paragraph);
// newDiv.appendChild(ol);
// userInfoDiv.appendChild(newDiv);
        
    }