function validateEmail(){
    const email_element = document.getElementById("input-email");
    const msg_element = document.getElementById("msg");
    const email = email_element.value;
    if(email.length >0 && email.length < 8){
        msg_element.textContent = "Email should be greater than 8 characters";
        msg_element.style.color ="red";
        email_element.focus();
        // node = document.createTextNode("Email should be between greater than 8 characters")
    }else if(!(email.includes("@") && email.endsWith(".com"))){
        msg_element.textContent = "Enter valid email";
        msg_element.style.color ="red";
        email_element.focus();
    }else {
        alert("Thank you");
        msg_element.value=""
    }
    email_element.value = "";
}