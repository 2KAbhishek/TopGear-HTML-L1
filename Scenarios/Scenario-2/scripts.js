function validateForm() {
    var name = document.forms["register"]["name"].value;
    var age = document.forms["register"]["age"].value;
    var email = document.forms["register"]["email"].value;
    if (!name.match(/^[A-Za-z\s]+$/)) {
        alert("Name:\t Characters Only!");
        return false;
    }
    if (parseInt(age) < 18) {
        alert("Age:\t 18 or more only!");
        return false;
    }
    if (!email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)) {
        alert("Email ID:\t Invalid email!");
        return false;
    }
    return true;
}
