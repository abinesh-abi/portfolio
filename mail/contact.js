// form validation

var form = document.getElementById("submit-form");
var name = document.getElementById("name").value;
var nameError = document.getElementById("name-error");
var email = document.getElementById("email").value;
var emailError = document.getElementById("email-error");

var textArea = document.getElementById("message").value;
var textAreaError = document.getElementById("textAreaError");

var nameStatus,emailStatus,messageStaus=false;

var formValied = (e) => {
  if (name === "") {
    e.preventDefault();
    nameError.innerHTML = "name can not empty";
    console.log("name empty");
  } else if (name.length < 3) {
    e.preventDefault();
    nameError.innerHTML = "name must three digit";
    console.log("name must three digit");
  } else if (!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)) {
    e.preventDefault();
    nameError.innerHTML = "enter full name";
  } else {
    nameStatus=true;
    nameError.innerHTML = "";
  }

  if (email === "") {
    e.preventDefault();
    emailError.innerHTML = "email can not empty";
  } else if (!email.match(/^[A-Za-z\.|\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {
    e.preventDefault();
    emailError.innerHTML = "Email Invalid";
  } else {
    emailStatus=true;
    emailError.innerHTML = "";
  }

  if (textArea < 3) {
    e.preventDefault();
    textAreaError.innerHTML = "message must more than three charecter";
  }else{
    messageStaus=true;
  }




if (nameStatus && emailStatus && messageStaus) {
 
  
    e.preventDefault();

  $.ajax({
    url: "https://script.google.com/macros/s/AKfycbznNyf8b48S8lv_3FlEMdd1IAs7i20Kry_uahAv23zufaPX6Jk/exec",
    data: $("#submit-form").serialize(),
    method: "post",
    success: function (response) {
      alert("Form submitted successfully");
      window.location.reload();
      //window.location.href="https://google.com"
    },
    error: function (err) {
      alert("Something Error");
    },
  });

}

}
form.addEventListener("submit",formValied);

// form submmision

// $("#submit-form").submit((e) => {
//   e.preventDefault();
//   $.ajax({
//     url: "https://script.google.com/macros/s/AKfycbznNyf8b48S8lv_3FlEMdd1IAs7i20Kry_uahAv23zufaPX6Jk/exec",
//     data: $("#submit-form").serialize(),
//     method: "post",
//     success: function (response) {
//       alert("Form submitted successfully");
//       window.location.reload();
//       //window.location.href="https://google.com"
//     },
//     error: function (err) {
//       alert("Something Error");
//     },
//   });
// });
