document.addEventListener("DOMContentLoaded", function () {
    const registerForm = document.getElementById("registerForm");

    registerForm.addEventListener("submit", function (event) {
        const firstName = document.getElementById("first_name").value.trim();
        const lastName = document.getElementById("last_name").value.trim();
        const email = document.getElementById("email").value.trim();
        const password = document.getElementById("password").value;
        const num = document.getElementById("num").value;
        const pic = document.getElementById("pic").files.length;
        const city = document.getElementById("cityInput").value.trim();
        const gender = document.querySelector('input[name="sex"]:checked');

        if (!firstName || !lastName || !email || !password || !num || !city || pic === 0 || !gender) {
            alert("Please fill out all required fields.");
            event.preventDefault();
            return;
        }

        if (password.length < 6) {
            alert("Password must be at least 6 characters long.");
            event.preventDefault();
            return;
        }

        if (!/^[0-9]{11}$/.test(num)) {
            alert("Please enter a valid 11-digit phone number.");
            event.preventDefault();
            return;
        }

        alert("Registration successful! Welcome to Adopt Addict.");
    });
});
