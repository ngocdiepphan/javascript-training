document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("#form");

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        const emailInput = document.getElementById("email");
        const usernameInput = document.getElementById("username");
        const passwordInput = document.getElementById("password");
        const confirmPasswordInput = document.getElementById("password_confirm");

        // Perform validation for email
        if (!Validator.isEmail(emailInput.value)) {
            showError(emailInput, "Please enter a valid email");
        } else {
            hideError(emailInput);
        }

        // Perform validation for username
        if (!Validator.isUsername(usernameInput.value)) {
            showError(usernameInput, "Username must be at least 3 characters");
        } else {
            hideError(usernameInput);
        }

        // Perform validation for password
        if (!Validator.minLength(passwordInput.value, 8)) {
            showError(passwordInput, "Password must be at least 8 characters");
        } else {
            hideError(passwordInput);
        }

        // Perform validation for confirmPassword
        if (
            !Validator.minLength(confirmPasswordInput.value, 8) ||
            confirmPasswordInput.value !== passwordInput.value
        ) {
            showError(confirmPasswordInput, "Passwords do not match");
        } else {
            hideError(confirmPasswordInput);
        }
        
        displayEnteredData(emailInput.value, usernameInput.value, passwordInput.value, confirmPasswordInput.value);
    });
});

// Function to show error message
function showError(input, message) {
    const formGroup = input.parentElement;
    const errorMessage = formGroup.querySelector(".form-message");
    errorMessage.textContent = message;
    formGroup.classList.add("invalid");
}

// Function to hide error message
function hideError(input) {
    const formGroup = input.parentElement;
    formGroup.classList.remove("invalid");
    formGroup.querySelector(".form-message").textContent = "";
}

// Function to display entered data
function displayEnteredData(email, username, password, confirmPassword) {
    const displayDataElement = document.querySelector("#display-data");
    displayDataElement.innerHTML = `
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Username:</strong> ${username}</p>
        <p><strong>Password:</strong> ${password}</p>
        <p><strong>Confirm Password:</strong> ${confirmPassword}</p>
    `;
}

// Validator object and validation methods
const Validator = {
    isEmail: function (value) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(value);
    },
    isUsername: function (value) {
        return value.length >= 3;
    },
    minLength: function (value, length) {
        return value.length >= length;
    },
};
