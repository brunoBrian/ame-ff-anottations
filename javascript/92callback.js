function saudacao(mensagem) {
    console.log(mensagem)
}
  
  function formatarMensagem(name, callback) {
    const mensagem = `Bem vindo ao Fast Forward, ` + name;

    callback(mensagem);
  }
  
  formatarMensagem('Bruno', saudacao);
