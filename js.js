/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/ClientSide/javascript.js to edit this template
 */
const cpfInput = document.getElementById('cpf');
const senhaInput = document.getElementById('senha');
const submitButton = document.getElementById('submitButton');

function validateForm() {
    if (cpfInput.value.length >= 11 && senhaInput.value.length >= 8) {
        submitButton.disabled = false;
        submitButton.style.cursor = 'pointer';
    } else {
        submitButton.disabled = true;
        submitButton.style.cursor = 'not-allowed';
    }
}


submitButton.style.backgroundColor = '#800080'; 
submitButton.style.color = '#FFFFFF';

cpfInput.addEventListener('input', validateForm);
senhaInput.addEventListener('input', validateForm);

document.getElementById('login').addEventListener('submit', function(event) {
    event.preventDefault();

    const cpf = cpfInput.value;
    const senha = senhaInput.value;

    alert("Obrigado pelas informações! CPF: " + cpf + " Senha: " + senha);
});