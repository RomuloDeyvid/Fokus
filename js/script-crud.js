const btAdicionarTarefa = document.querySelector('.app__button--add-task')
const formAdicionarTarefa = document.querySelector('.app__form-add-task')
const textArea = document.querySelector('.app__form-textarea')
const listaDeTarefas = JSON.parse(localStorage.getItem('tarefas')) || []
const ulTarefas = document.querySelector('.app__section-task-list')

function criarElementoTarefa(tarefa){
    const li = document.createElement('li')
    li.classList.add('app__section-task-list-item')
    const svg = document.createElement('svg')
    
    svg.innerHTML = `
        <svg class="app__section-task-icon-status" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="12" cy="12" r="12" fill="#FFF"></circle>
        <path d="M9 16.1719L19.5938 5.57812L21 6.98438L9 18.9844L3.42188 13.4062L4.82812 12L9 16.1719Z" fill="#01080E"></path>
    </svg>
    `
    svg.classList.add('app__section-task-icon-status')
    const paragrafo = document.createElement('p')
    paragrafo.classList.add('app__section-task-list-item-description')
    paragrafo.textContent = tarefa.descricao
    
    const botao = document.createElement('button')
    botao.classList.add('app_button-edit')
    const imagemBotao = document.createElement('img')
    imagemBotao.setAttribute('src', '/imagens/edit.png')
    botao.append(imagemBotao)

    li.append(svg)
    li.append(paragrafo)
    li.append(botao)
    return li
}

btAdicionarTarefa.addEventListener('click', () => {
    formAdicionarTarefa.classList.toggle('hidden')
    
})

formAdicionarTarefa.addEventListener('submit', (evento) =>{
    evento.preventDefault()
    const tarefa = {
        descricao: textArea.value
    }
    listaDeTarefas.push(tarefa)
    //Ao adicionar a tarefa na lista, exibi na tela a tarefa que acabou de ser adicionada
    const elementoTarefa = criarElementoTarefa(tarefa)
    ulTarefas.append(elementoTarefa)
    //Armazena a tarefa no localStorage
    localStorage.setItem('tarefas', JSON.stringify(listaDeTarefas))
    //Limpando o texto digitado
    textArea.value =''
    //Escondendo novamente o formulário
    formAdicionarTarefa.classList.add('hidden')
})

listaDeTarefas.forEach(tarefa => {
    const elementoTarefa =  criarElementoTarefa(tarefa)
    ulTarefas.append(elementoTarefa)
});


