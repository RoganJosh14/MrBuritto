
/*the function below checks the form based on each of the assigned values, if the values are not recevied the alert boxes will appear*/

function checkinfo(){
	
		if (document.getElementById('Username').value == ""){
			alert('Please enter Username!');
			return false;
			}
			
		else if(document.getElementById('Password').value <= "9"){
			alert('Please enter Password!');
			return false;
			}
			
		else if (document.getElementById('ddselect').value == ("0.00")){
			alert('Please select Buritto Size!');
			return false;
			}
			
		else if (document.getElementById('Qty').value == ""){
			alert('Please select Quantity!');
			return false;
			}
			
		else if (document.getElementById('dcode').value == "MexTexGood"){
			alert('Congratulations! Enjoy overall 10% discount on your total bill! ');
			return true;
			}
			
							}

	/* the below function is to calculate the total based on the buritto size selected and quantity, based on the value assigned the auto calculation 
		will be done and refelcted in the total amount text feild with the id "totalPrice". There is also a warning function that will appear upon 
		selection of the supersize buritto*/
		
		function calculateTotal(){

		if(document.getElementById('ddselect').value ==("17.50")){
			alert('Warning! Supersize Burrito is a Health Hazard! Would you like to proceed?');
			}
			
		var num1=document.getElementById('ddselect').value;
		var num2=document.getElementById('Qty').value;
		var total= parseFloat(num1)*parseFloat(num2);
	
		if (!isNaN(total)){document.getElementById('totalPrice').value = parseFloat(total).toFixed(2);
			}
				}