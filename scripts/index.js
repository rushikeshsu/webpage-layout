function navToggler() {
    console.log("navigation bar");
    var navigation = document.getElementsByClassName("links")[0];
    navigation.setAttribute("style",
     "display: flex; flex-direction: column; position: relative;"
    );
}


function validateEmail(){
    const emailElement = document.getElementById("input-email");
    const msgElement = document.getElementById("msg");
    const email = emailElement.value;
    if(email.length >0 && email.length < 8){
        msgElement.textContent = "Email should be greater than 8 characters";
        msgElement.style.color ="red";
        emailElement.focus();
    }else if(!(email.includes("@") && email.endsWith(".com"))){
        msgElement.textContent = "Enter valid email";
        msgElement.style.color ="red";
        emailElement.focus();
    }else {
        alert("Thank you");
        msgElement.value=""
    }
    emailElement.value = "";
}


function validateDetails(){
    const nameElement = document.getElementById("name");
    const phoneElement = document.getElementById("phone");
    const emailElement = document.getElementById("email");
    const subjectElement = document.getElementById("subject");
    const messageElement = document.getElementById("message");

    const name = nameElement.value;
    const phone = phoneElement.value;
    const email = emailElement.value;
    const subject = subjectElement.value;
    const message = messageElement.value;

    console.log(name, phone , email, subject, message);
    const msg = document.getElementById("msg-warning");
    msg.style.color ="red";
    nameRegex = /^[a-z0-9A-z]{5,15}$/;
    phoneRegex = /^[0-9]{10}$/;
    console.log(nameRegex.test(name));
    if(name.length === 0 ) {
        msg.innerText = "Name Required";
        nameElement.focus();
    }else if (!nameRegex.test(name)) {
        msg.innerText = "Username should be between 5 to 15 characters";
        nameElement.focus();
    }else if (!phoneRegex.test(phone)){
        msg.innerText = "Enter valid phone number";
        phoneElement.focus();
    }else if(email.length >0 && email.length < 8){
        msg.textContent = "Email should be greater than 8 characters";
        emailElement.focus();
    }else if(!(email.includes("@") && email.endsWith(".com"))){
        msg.textContent = "Enter valid email";
        emailElement.focus();
    }else if(subject.length === 0){
        msg.innerText = "Subject can not be empty;";
        subjectElement.focus();
    }else if(message.length === 0){
        msg.innerText = "Message can not be empty";
    }else {
        alert("Thank you");
        msg.value="";
    }
}