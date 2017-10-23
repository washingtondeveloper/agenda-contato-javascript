'use strict'
//Modelo de teste, compreender como os Frameworks e Libraries JavaScript Funciona

let app = document.querySelector('#app')
let listaContatos = [
  {nome: "Fabiana", telefone: '011-1111-1111', email: 'fabiana@exemplo.com'},
  {nome: "Carlos Silva", telefone: '022-2222-2222', email: 'carlos@exemplo.com'},
  {nome: "José Mendes", telefone: '033-3333-3333', email: 'jose@exemplo.com'}
]

function home(){
  app.innerHTML = ''
  app.innerHTML = `
    <h1>Home</h1>
    <div class="page-home">
      <h2>Agenda de contatos</h2>
    </div>
  `
}

function contatos() {
  app.innerHTML = ''
  app.innerHTML = `
    <h1>Lista de contatos</h1>
    <table>
      <thead>
        <tr>
          <th>Nome</th>
          <th>Telefone</th>
          <th>E-mail</th>
          <th>Ações</th>
        </tr>
      </thead>
      <tbody>
      </tbody>
    </table>
  `

  let tbody = document.querySelector('table tbody')

  for(var i = 0; i < listaContatos.length; i++){
    tbody.innerHTML += `
      <tr>
        <td>${listaContatos[i].nome}</td>
        <td>${listaContatos[i].telefone}</td>
        <td>${listaContatos[i].email}</td>
        <td>
          <a href="#" onclick="excluirContato('${listaContatos[i].nome}')">Excluir</a> |
          <a href="#" onclick="alterarContato('${listaContatos[i].nome}')">Editar</a>
        </td>
      </tr>
    `
  }
}

function adicionar(contato = null) {
  app.innerHTML = ''
  app.innerHTML = `
    <h1>Adicionar</h1>
    <fieldset>
      <legend>Adicionar Contato</legend>
      <input type="text" placeholder="Nome" value="${contato ? contato.nome : ''}"/>
      <input type="text" placeholder="Telefone" value="${contato ? contato.telefone : ''}"/>
      <input type="text" placeholder="E-mail" value="${contato ? contato.email : ''}"/>
      <button>Adicionar</button>
    </fieldset>
  `

  let inputNome     = document.querySelector('input[placeholder=Nome]')
  let inputTelefone = document.querySelector('input[placeholder=Telefone]')
  let inputEmail    = document.querySelector('input[placeholder=E-mail]')

  let index = listaContatos.indexOf(contato)

  console.log(">>>> " +index)
  document.querySelector('button').addEventListener('click',function(){
    let contato = {
      nome: inputNome.value,
      telefone: inputTelefone.value,
      email: inputEmail.value
    }

    if(index >= 0) {
      listaContatos.splice(index, 1, contato)
    }else {
      listaContatos.push(contato)
    }

    inputNome.value = ''
    inputTelefone.value = ''
    inputEmail.value = ''

    alert('Contato adiconado com sucesso!')
  }, false)
}

function alterarContato(nome) {
  let contato = listaContatos.filter((con) => {
    return con.nome == nome
  })
  adicionar(contato[0])
}

function excluirContato(nome){
  listaContatos = listaContatos.filter((v) => nome != v.nome );
  contatos()
}
