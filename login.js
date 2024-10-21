// Identifiants et mots de passe hachés (SHA-256 en hexadécimal)
const users = {
    'admin-NathanLvq': {
        password: '84a77cd55b6c550f53cf431f56b6188b3bd7a97ca2ddf3bf6547f4d0f9caa150',
        redirect: 'accounts/nathan.html'  // Page de redirection pour admin
    }
};

// Fonction pour convertir le texte en SHA-256
async function hashPassword(password) {
    const encoder = new TextEncoder();
    const data = encoder.encode(password);
    const hash = await crypto.subtle.digest('SHA-256', data);
    // Convertir le hash en chaîne hexadécimale
    return Array.from(new Uint8Array(hash)).map(b => b.toString(16).padStart(2, '0')).join('');
}

async function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('error-message');

    // Vérification des entrées utilisateur dans la console pour déboguer
    console.log('Username:', username);
    console.log('Password (en clair):', password);

    // Vérifier si l'utilisateur existe
    if (users[username]) {
        // Hacher le mot de passe saisi par l'utilisateur
        const hashedPassword = await hashPassword(password);
        console.log('Password haché (SHA-256):', hashedPassword);

        // Vérifier si le hachage correspond à celui stocké
        if (users[username].password === hashedPassword) {
            console.log('Connexion réussie!');
            // Redirection vers la page spécifique de l'utilisateur
            window.location.href = users[username].redirect;
        } else {
            errorMessage.textContent = 'Identifiant ou mot de passe incorrect';
            console.log('Mot de passe incorrect');
        }
    } else {
        errorMessage.textContent = 'Identifiant ou mot de passe incorrect';
        console.log('Identifiant incorrect');
    }
}
