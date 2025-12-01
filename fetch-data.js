// Fonction asynchrone pour récupérer les données des utilisateurs
async function fetchUserData() {
    const apiUrl = 'https://jsonplaceholder.typicode.com/users';
    const dataContainer = document.getElementById('api-data');

    try {
        // Récupération des données depuis l'API
        const response = await fetch(apiUrl);

        // Vérification si la requête a échoué
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const users = await response.json();

        // Effacer le message de chargement
        dataContainer.innerHTML = '';

        // Création de la liste des utilisateurs
        const userList = document.createElement('ul');

        users.forEach(user => {
            const li = document.createElement('li');
            li.textContent = user.name;
            userList.appendChild(li);
        });

        dataContainer.appendChild(userList);

    } catch (error) {
        // En cas d'erreur lors de la récupération
        dataContainer.innerHTML = '';
        dataContainer.textContent = 'Failed to load user data.';
        console.error('Error fetching user data:', error);
    }
}

// Appeler fetchUserData une fois le DOM chargé
document.addEventListener('DOMContentLoaded', fetchUserData);
