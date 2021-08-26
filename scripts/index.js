const WARNINGS = {
    NAME : "Name Required",
    USERNAME : "Username should be between 5 to 15 characters",
    PHONE: "Enter valid phone number",
    EMAIL_LENGTH : "Email should be greater than 8 characters",
    EMAIL : "Enter valid email" ,
    SUBJECT : "Subject can not be empty",
    MESSAGE : "Message can not be empty"
}

const validateEmail = () => {
  /** Email Validation in newsletter */
  const emailElement = document.querySelector("#input-email");
  const msgElement = document.querySelector("#msg");
  const email = emailElement.value;
  if (email.length > 0 && email.length < 8) {
    msgElement.textContent = WARNINGS.EMAIL_LENGTH;
    msgElement.style.color = "red";
    emailElement.focus();
  } else if (!(email.includes("@") && email.endsWith(".com"))) {
    msgElement.textContent = WARNINGS.EMAIL;
    msgElement.style.color = "red";
    emailElement.focus();
  } else {
    alert("Thank you");
    msgElement.value = "";
  }
  emailElement.value = "";
};

const validateDetails = () => {
  /** Contact Us form validation */
  const nameElement = document.querySelector("#name");
  const phoneElement = document.querySelector("#phone");
  const emailElement = document.querySelector("#email");
  const subjectElement = document.querySelector("#subject");
  const messageElement = document.querySelector("#message");
  const name = nameElement.value;
  const phone = phoneElement.value;
  const email = emailElement.value;
  const subject = subjectElement.value;
  const message = messageElement.value;
  const msg = document.querySelector("#msg-warning");
  msg.style.color = "red";
  nameRegex = /^[a-z0-9A-z]{5,15}$/;
  phoneRegex = /^[0-9]{10}$/;
  if (name.length === 0) {
    msg.innerText = WARNINGS.NAME;
    nameElement.focus();
  } else if (!nameRegex.test(name)) {
    msg.innerText = WARNINGS.USERNAME;
    nameElement.focus();
  } else if (!phoneRegex.test(phone)) {
    msg.innerText = WARNINGS.PHONE;
    phoneElement.focus();
  } else if (email.length > 0 && email.length < 8) {
    msg.textContent = WARNINGS.EMAIL_LENGTH;
    emailElement.focus();
  } else if (!(email.includes("@") && email.endsWith(".com"))) {
    msg.textContent = WARNINGS.EMAIL;
    emailElement.focus();
  } else if (subject.length === 0) {
    msg.innerText = WARNINGS.SUBJECT;
    subjectElement.focus();
  } else if (message.length === 0) {
    msg.innerText = WARNINGS.MESSAGE;
  } else {
    alert("Thank you");
    msg.value = "";
  }
};
