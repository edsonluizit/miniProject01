const form = document.getElementById('form');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const submitBtn = document.getElementById('submitBtn');

const nameError = document.getElementById('nameError');
const emailError = document.getElementById('emailError');
const passwordError = document.getElementById('passwordError');

// Regex para validação
const nameRegex = /^[A-Za-zÀ-ÿ\s]{3,}$/;
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const passwordRegex = /^.{6,}$/;

function validateInput(input, regex, errorElement, errorMessage) {
    if (!regex.test(input.value.trim())) {
        errorElement.textContent = errorMessage;
        return false;
    } else {
        errorElement.textContent = '';
        return true;
    }
}

function checkFormValidity() {
    const isNameValid = validateInput(nameInput, nameRegex, nameError, "Nome deve ter pelo menos 3 letras.");
    const isEmailValid = validateInput(emailInput, emailRegex, emailError, "Digite um e-mail válido.");
    const isPasswordValid = validateInput(passwordInput, passwordRegex, passwordError, "Senha deve ter no mínimo 6 caracteres.");

    submitBtn.disabled = !(isNameValid && isEmailValid && isPasswordValid);
}

nameInput.addEventListener('input', checkFormValidity);
emailInput.addEventListener('input', checkFormValidity);
passwordInput.addEventListener('input', checkFormValidity);

form.addEventListener('submit', (e) => {
    e.preventDefault();
    alert("Formulário enviado com sucesso!");
    form.reset();
    submitBtn.disabled = true;
});
