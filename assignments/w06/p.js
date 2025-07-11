

// document.getElementById("contact-form").addEventListener("submit", (event) => {
//     const myname = this.name.value;
//     const myemail = this.name.value;
//     let errorMessage = ""

//     if (!myname){
//         errorMessage += "<p>The name is empty!</p>"
//     }

//     if (!myemail){
//         errorMessage += "<p>The name is empty!</p>"
//     }

//     else if (myemail.indexOf("." != -1) || myemail.indexOf("@" != -1)){
//         errorMessage += "<p> The e-mail is not formatted correctly!</p>";
//     }
//     if (errorMessage){
//         event.preventDefault();
//         document.getElementById("form-error").innerHTML = errorMessage;
//     }
// })

document.getElementById("contact-form").addEventListener("submit", (event) => {
    const form = event.target;
    const myname = form.querySelector("#name").value.trim();
    const myemail = form.querySelector("#email").value.trim();
    let errorMessage = "";
  
    if (!myname) {
      errorMessage += "<p>The name is empty!</p>";
    }
  
    if (!myemail) {
      errorMessage += "<p>The email is empty!</p>";
    } else if (myemail.indexOf(".") === -1 || myemail.indexOf("@") === -1) {
      errorMessage += "<p>The e-mail is not formatted correctly!</p>";
    }
  
    if (errorMessage) {
      event.preventDefault();
      document.getElementById("form-error").innerHTML = errorMessage;
    }
  });
  