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

function limparMensagemTrabalhada(){
    const mensagem = getMensagem();

    if(mensagem.length==0){
        showMensagem(mensagem);
    }
}
