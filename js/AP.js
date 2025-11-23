// Validate form input and give feedback on submission
document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("adoptionForm");

    form.addEventListener("submit", function (event) {
        const animal = document.getElementById("adopt").value;
        const species = document.getElementById("species").value.trim();
        const age = document.getElementById("age").value;
        const img = document.getElementById("img").files.length;
        const description = document.getElementById("description").value.trim();

        // Basic validation checks
        if (!animal || !species || !age || !description || img === 0) {
            alert("Please fill in all required fields and upload an image before submitting.");
            event.preventDefault();
            return;
        }

        if (age < 0) {
            alert("Age cannot be negative. Please enter a valid number.");
            event.preventDefault();
            return;
        }

        alert("Thank you! Your adoption post has been submitted successfully.");
    });
});
