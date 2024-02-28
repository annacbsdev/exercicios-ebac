const form = document.getElementById('form');
const mensagem = document.querySelector('.mensagem');


form.addEventListener('submit', function (e) {
    e.preventDefault();

    let campoA = parseInt(document.getElementById("campoA").value);
    let campoB = parseInt(document.getElementById("campoB").value);

    if (campoB > campoA) {
        mensagem.innerHTML = `
        <img class="img-certo" src="certo.png" alt="ícone de check.">
        <p> Formulário válido. ${campoB} é maior que ${campoA}.</p>`;

    } else {
        mensagem.innerHTML = `
        <img class="img-erro" src="erro.webp" alt="ícone de erro.">
        <p>Formulário inválido! ${campoB} é menor que ${campoA}.</p>`;
    }
});