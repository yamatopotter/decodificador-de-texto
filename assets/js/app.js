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

function showMensagem(mensagem) {
  const mensagemTrabalhada = document.getElementById("mensagemTrabalhada");
  const mostrarMensagemTrabalhada = document.getElementById(
    "mostrarMensagemTrabalhada"
  );
  const nadaEncontrado = document.getElementById("nadaEncontrado");

  nadaEncontrado.classList.add("hide");
  mostrarMensagemTrabalhada.classList.remove("hide");

  mensagemTrabalhada.innerText = mensagem;
}

function descriptografarMensagem() {
  let mensagem = getMensagem();

  for (const key in caracteresCriptografia) {
    mensagem = mensagem.replaceAll(caracteresCriptografia[key], key);
  }

  showMensagem(mensagem);
}

function criptografarMensagem() {
  let mensagem = getMensagem();

  for (const key in caracteresCriptografia) {
    mensagem = mensagem.replaceAll(key, caracteresCriptografia[key]);
  }

  showMensagem(mensagem);
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

function limparMensagemTrabalhada(){
    const mensagem = getMensagem();

    if(mensagem.length==0){
        showMensagem(mensagem);
    }
}
