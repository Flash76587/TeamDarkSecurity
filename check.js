function checkStrength() {
    const password = document.getElementById("password").value;
    const strengthBar = document.getElementById("strength-bar");
    const strengthText = document.getElementById("strength-text");
    const strengthIcon = document.getElementById("strength-icon");
    let strength = 0;

    const lengthCheck = password.length >= 8;
    const uppercaseCheck = /[A-Z]/.test(password);
    const numberCheck = /\d/.test(password);
    const specialCheck = /[!@#$%^&*(),.?":{}|<>]/.test(password);

    // Update criteria indicators
    updateFeedback("length", lengthCheck);
    updateFeedback("uppercase", uppercaseCheck);
    updateFeedback("numbers", numberCheck);
    updateFeedback("special", specialCheck);

    // Calculate strength score
    if (lengthCheck) strength += 1;
    if (uppercaseCheck) strength += 1;
    if (numberCheck) strength += 1;
    if (specialCheck) strength += 1;

    // Update the progress bar and text based on strength
    switch (strength) {
        case 1:
            strengthBar.style.width = "25%";
            strengthBar.className = "progress-bar bg-danger";
            strengthText.textContent = "Strength: Weak";
            strengthIcon.className = "bi bi-hand-thumbs-down text-danger";
            break;
        case 2:
            strengthBar.style.width = "50%";
            strengthBar.className = "progress-bar bg-warning";
            strengthText.textContent = "Strength: Fair";
            strengthIcon.className = "bi bi-hand-thumbs-up text-warning";
            break;
        case 3:
            strengthBar.style.width = "75%";
            strengthBar.className = "progress-bar bg-info";
            strengthText.textContent = "Strength: Good";
            strengthIcon.className = "bi bi-shield-lock text-info";
            break;
        case 4:
            strengthBar.style.width = "100%";
            strengthBar.className = "progress-bar bg-success";
            strengthText.textContent = "Strength: Strong";
            strengthIcon.className = "bi bi-check-circle text-success";
            break;
        default:
            strengthBar.style.width = "0%";
            strengthBar.className = "progress-bar bg-danger";
            strengthText.textContent = "Strength: Very Weak";
            strengthIcon.className = "bi bi-hand-thumbs-down text-danger";
    }
}

function updateFeedback(elementId, isValid) {
    const element = document.getElementById(elementId);
    const icon = document.getElementById(`${elementId}-icon`);

    if (isValid) {
        element.classList.remove("text-danger");
        element.classList.add("text-success");
        icon.innerHTML = '<i class="bi bi-check-circle text-success"></i>';
    } else {
        element.classList.remove("text-success");
        element.classList.add("text-danger");
        icon.innerHTML = '<i class="bi bi-x-circle text-danger"></i>';
    }
}

// Toggle password visibility
function togglePassword() {
    const passwordField = document.getElementById("password");
    passwordField.type = passwordField.type === "password" ? "text" : "password";
}
