document.getElementById("contactForm").onsubmit = function(event) {

    event.preventDefault();

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let messageArea = document.getElementById("formMessage");

    if (name === "" || email === "") {
        messageArea.textContent = "Please fill in all fields.";
        messageArea.style.color = "red";
    } else {
        messageArea.textContent = "Thank you " + name + "! Your message has been received.";
        messageArea.style.color = "green";

        // Reset the form fields
        document.getElementById("contactForm").reset();
    }

};// Fade message after 3 seconds
setTimeout(function() {
    messageArea.textContent = "";
}, 3000);

let isDark = false;

document.getElementById("darkModeBtn").onclick = function() {
    if (!isDark) {
        document.body.style.backgroundColor = "#1a1a1a";
        document.body.style.color = "white";
        isDark = true;
    } else {
        document.body.style.backgroundColor = "#f2f2f2";
        document.body.style.color = "black";
        isDark = false;
    }
};