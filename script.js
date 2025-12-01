document.addEventListener("DOMContentLoaded", function () {
    // Sélection du formulaire et de la division de feedback
    const form = document.getElementById("registration-form");
    const feedbackDiv = document.getElementById("form-feedback");

    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Empêche l'envoi du formulair

        // Récupération et nettoyage des valeurs
        const username = document.getElementById("username").value.trim();
        const email = document.getElementById("email").value.trim();
        const password = document.getElementById("password").value.trim();

        // Variables de validation
        let isValid = true;
        const messages = [];

        // Validation du nom d'utilisateur
        if (username.length < 3) {
            isValid = false;
            messages.push("Le nom d'utilisateur doit contenir au moins 3 caractères.");
        }

        // Validation de l'email
        if (!email.includes("@") || !email.includes(".")) {
            isValid = false;
            messages.push("Veuillez entrer un email valide.");
        }

        // Validation du mot de passe
        if (password.length < 8) {
            isValid = false;
            messages.push("Le mot de passe doit contenir au moins 8 caractères.");
        }

        // Affichage du feedback
        feedbackDiv.style.display = "block";
        if (isValid) {
            feedbackDiv.textContent = "Registration successful!";
            feedbackDiv.style.color = "#28a745"; // vert
        } else {
            feedbackDiv.innerHTML = messages.join("<br>");
            feedbackDiv.style.color = "#dc3545"; // rouge
        }
    });
});
