function validateForm() {

    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var age = document.getElementById("age").value;
    var prn = document.getElementById("prn").value;
    var contact = document.getElementById("contact").value;

    if (name === "") {
        alert("Name is required");
        return false;
    }

    if (email === "") {
        alert("Email is required");
        return false;
    }

    if (!email.includes("@")) {
        alert("Please enter a valid email");
        return false;
    }

    if (age === "") {
        alert("Age is required");
        return false;
    }

    if (isNaN(age)) {
        alert("Age must be an integer");
        return false;
    }

    if (prn === "") {
        alert("PRN is required");
        return false;
    }

    if (isNaN(prn)) {
        alert("PRN must contain integers only");
        return false;
    }

    if (contact === "") {
        alert("Contact number is required");
        return false;
    }

    if (isNaN(contact)) {
        alert("Contact number must contain integers only");
        return false;
    }

    alert("Form submitted successfully!");
    return true;
}
