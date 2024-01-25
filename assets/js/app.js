const caracteresCriptografia = {
  e: "enter",
  i: "imes",
  a: "ai",
  u: "ufat",
  o: "ober",
};

function getMensagem() {
  const mensagem = document.getElementById("mensagem").value;
  return mensagem;
}

function showNadaEncontrado() {
  const mostrarMensagemTrabalhada = document.getElementById(
    "mostrarMensagemTrabalhada"
  );
  const nadaEncontrado = document.getElementById("nadaEncontrado");

  nadaEncontrado.classList.remove("hide");
  mostrarMensagemTrabalhada.classList.add("hide");
}

function showMensagem() {
  const mostrarMensagemTrabalhada = document.getElementById(
    "mostrarMensagemTrabalhada"
  );
  const nadaEncontrado = document.getElementById("nadaEncontrado");

  nadaEncontrado.classList.add("hide");
  mostrarMensagemTrabalhada.classList.remove("hide");
}

function displayMensagem(mensagem) {
  const mensagemTrabalhada = document.getElementById("mensagemTrabalhada");
  showMensagem();

  mensagemTrabalhada.innerText = mensagem;
}

function descriptografarMensagem() {
  const aux = getMensagem();
  let mensagem = aux;

  for (const key in caracteresCriptografia) {
    mensagem = mensagem.replaceAll(caracteresCriptografia[key], key);
  }

  if (aux !== mensagem) {
    displayMensagem(mensagem);
    return;
  }

  displayMensagem("Essa mensagem já se encontra descriptografada");
}

function criptografarMensagem() {
  let mensagem = getMensagem();

  for (const key in caracteresCriptografia) {
    mensagem = mensagem.replaceAll(key, caracteresCriptografia[key]);
  }

  displayMensagem(mensagem);
}

// codigo retirado do W3Schools
function copiarMensagem() {
  // Get the text field
  let mensagemTrabalhada = document.getElementById("mensagemTrabalhada");

  // Copia o texto para area de transferência
  navigator.clipboard.writeText(mensagemTrabalhada.innerText);

  // Exibe um alert para a cópia do texto
  alert("Mensagem copiada: " + mensagemTrabalhada.innerText);
}

function limparMensagemTrabalhada() {
  const mensagem = getMensagem();

  if (mensagem.length > 0) {
    displayMensagem(mensagem);
    return;
  }

  showNadaEncontrado();
}
