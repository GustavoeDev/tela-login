document.addEventListener('DOMContentLoaded', () => {
    const sectionCreate = document.getElementById('section-create');
    const sectionEnter = document.getElementById('section-enter');
    const btnSignUp = document.getElementById('btn-sign-up');
    const btnLogin = document.getElementById('btn-login');

    
    const showSignUp = () => {
        sectionCreate.style.display = 'flex';
        sectionEnter.style.display = 'none';
        btnSignUp.style.display = 'none';
        btnLogin.style.display = 'inline';
    };

    
    const showLogin = () => {
        sectionCreate.style.display = 'none';
        sectionEnter.style.display = 'flex';
        btnSignUp.style.display = 'inline';
        btnLogin.style.display = 'none';
    };

    
    btnSignUp.addEventListener('click', showSignUp);
    btnLogin.addEventListener('click', showLogin);

    
    showLogin(); // Ou use showLogin() se preferir iniciar com a tela de login
});
