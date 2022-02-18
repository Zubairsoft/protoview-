function validateForm() {
    var email = document.getElementById('email').value;
    let x = document.forms["myForm"]["fname"].value;
    if (x == "") {
      alert("you must enter your name");
      return false;
    }
    if (email.indexOf('@') == -1) {
        alert("Enter correct syntax for email");
        return false
    }
  }
  function dark() {
    var element = document.body;
    element.classList.toggle("dark-mode");}