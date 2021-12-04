
//Requires fields that cannot be left blank to be filled out. If it is not filled out, there will be an alert that tells the user that something needs to be filled out, and that input field will be highlighted red.
function validateForm() {
  //** these call to specific variable inputs. //
  var fname = document.forms["myForm"]["fname"].value;
  var lname = document.forms["myForm"]["lname"].value;
  var address = document.forms["myForm"]["address"].value;
  var city = document.forms["myForm"]["city"].value;
  var state = document.forms["myForm"]["state"].value;
  var zip = document.forms["myForm"]["zip"].value;
  var area = document.forms["myForm"]["area"].value;
  var number = document.forms["myForm"]["number"].value;
  var email = document.forms["myForm"]["email"].value;
  var confirm = document.forms["myForm"]["confirm"].value;
//** Checks for numbers only, letters only, or alphanumeric for each input. //
  var alpha = /^[A-Za-z]+$/;
  var numeric = /^[0-9]*$/
  var alphanumeric = /^[A-Za-z0-9]+$/;
//** Checks for valid email address //
  var emailaddress = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

//**Validating the first name field is filled in with letters only. If not, an error alert will pop up //
  if (fname == "") {
    alert("Please fill in first name");
    document.getElementById('fname').style.borderColor = "red";
        return false;
      }
  if(fname.match(numeric))
        {
        alert("Please enter letters only.");
        document.getElementById('fname').style.borderColor = "red";
        return false;
        }
//**Validating the last name field is filled in with letters only. If not, an error alert will pop up //

    if (lname == "") {
      alert("Please fill in last name");
    document.getElementById('lname').style.borderColor = "red";
    return false;
      }
  if(lname.match(numeric))  {
      alert("Please enter letters only.");
    document.getElementById('lname').style.borderColor = "red";
    return false;
            }
//**Validating the address field is filled in with letters and numbers (alphanumeric). If not, an error alert will pop up //
      if (address == "") {
        alert("Please fill in address");
      document.getElementById('address').style.borderColor = "red";
      return false;
        }
    if(address.match(alphanumeric))
        {
      return true;
    }
//**Validating the city field is filled in with letters only. If not, an error alert will pop up //

    if (city == "") {
      alert("Please fill in city");
      document.getElementById('city').style.borderColor = "red";
      return false;
          }
    if(city.match(numeric))  {
      alert("Please enter letters only.");
      document.getElementById('city').style.borderColor = "red";
      return false;
      }
//**Validating the state selection is filled in with one of the dropdown selections. If not, an error alert will pop up //

    if (state == "Select") {
          alert("Please select a state from the drop down");
          document.getElementById('state').style.borderColor = "red";
          return false;
              }
//** Validates the 5-digit U.S. postal number - zip code. If the input is more or less than 5 digits, then there will be an error message //
              var zip = document.getElementById('zip').value;
              var zipRGEX = /^\d{5}(?:[- ]?\d{4})?$/;
              var zipResult = zipRGEX.test(zip);
//** Validates the zip code. If the input is more or less than the required amount, then there will be an error message //

    if(zipResult == false)  {
        alert('Please enter a valid 5-digit zip code');
        document.getElementById('zip').style.borderColor = "red";
         return false;
           }

     if (area == "") {
       alert("Please fill 3 digit area code");
       document.getElementById('area').style.borderColor = "red";
        return false;
          }

     if(area.match(alpha)) {
        alert("Please enter numbers only.");
         document.getElementById('area').style.borderColor = "red";
         return false;
           }

     if (number == "") {
       alert("Please enter a valid phone number");
        document.getElementById('number').style.borderColor = "red";
         return false;
            }

 //** Validates the email address. If the input does not contain the valid alphanumeric characters and symbols, then they will receive an error alert and the form will not be submitted. //
              var email = document.getElementById('email').value;
              var emailRGEX = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
              var emailResult = emailRGEX.test(email);
     if(emailResult == false)  {
        alert('Please enter a valid email address');
        document.getElementById('email').style.borderColor = "red";

        return false;
          }
  //** Validates the email address matches the previous input exactly. If not, they will receive an error alert and the form will not be submitted. //

      if(email != confirm) {
        alert('Email Not Matching! Please confirm email');
        document.getElementById('confirm').style.borderColor = "red";
        return false;
          }
//** Validates the radio buttons. If at least one option is not checked, then they will receive an error alert and the form will not be submitted. //

          if(document.getElementById('Vegan').checked) {
                  return true;
                   }
          else if(document.getElementById('Vegetarian').checked) {
                  return true;
                   }
         else if(document.getElementById('Non-Vegetarian').checked) {
                    return true;
                   }
         else {
         alert('Please select one meal preference');
           return false;
                   }
}
function validate() {
   var checked = 0;

   //Reference the Table for the checkbox.
   var contacting = document.getElementById("checking");

   //Reference all the CheckBoxes in Table by input.
   var chks = checking.getElementsByTagName("INPUT");

   //Loop and count the number of checked CheckBoxes.
     for (var i = 0; i < chks.length; i++) {
          if (chks[i].checked) {
              checked++;
          }
        }
  //** Validates if there are 2 or more checkboxes checked, it is returned true and the email goes through. If not, they will receive an error message. //
      if (checked >= 2) {
            return true;
        }
      else {
          alert("Please select at least two methods of contact.");
          return false;
      }
     }
