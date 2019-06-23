//abaixo estamos buscando as informaçoes de cada um dos id's informados na variável
var nameInput = document.getElementById('nameInput');
var descInput = document.getElementById('descInput');
var dataInput = document.getElementById('dataInput');
var addButton = document.getElementById('addButton');
var usersList = document.getElementById('usersList');
var addTdNome = document.getElementById('addTdNome');
var addLinhaTabela = document.getElementById('addLinhaTabela');
var addTdDesc = document.getElementById('addTdDesc');
var addTdData = document.getElementById('addTdData');

/*criando um evento para quando o usuário clicar no botão, executar uma função;
o listener vai ouvir o evento click e isso dispara uma função chamada create que vai receber 3 valores*/
addButton.addEventListener('click', function() {
    create(nameInput.value, descInput.value, dataInput.value);
})

/*vamos obter os valores de nome, idade e data e gerar/inputar esse valor no firebase*/
function create(name, desc, data) {
    var dados = {
        //"name recebo name, que será o valor do id nameInput"
        name: name,
        desc: desc,
        data: data
    }
    //firebase.DATABASE é o q vamos usar para conectar nossa base de dados
    return firebase.database().ref().child('users').push(dados);
}

//toda vez que um valor for alterado, incluído, removido da nossa lista ele vai disparar uma função
firebase.database().ref('users').on('value', function (snapshot) {
    usersList.innerHTML = '';
    //para cada item a gente cria um novo elemento do tipo 'li'
    snapshot.forEach(function (item) {
        var li = document.createElement('li');
        li.appendChild(document.createTextNode(item.val().name + '/ ' + item.val().desc + '/ ' + item.val().data));
        usersList.appendChild(li);
    });
});

//Add na Tabela:

firebase.database().ref('users').on('value', function (snapshot) {
    addTdNome.innerHTML = '';
    //para cada item a gente cria um novo elemento do tipo 'td, Name.
    snapshot.forEach(function (item) {
        var td = document.createElement('td');
        td.appendChild(document.createTextNode(item.val().name));
        //addTdNome.parentNode.appendChild(td);
        addTdNome.appendChild(td);
    });
});

firebase.database().ref('users').on('value', function (snapshot) {
    addTdDesc.innerHTML = '';
    //para cada item a gente cria um novo elemento do tipo 'td', Descricao.
    snapshot.forEach(function (item) {
        var td = document.createElement('td');
        td.appendChild(document.createTextNode(item.val().desc));
        addTdDesc.appendChild(td);
    });
});

firebase.database().ref('users').on('value', function (snapshot) {
    addTdData.innerHTML = '';
    //para cada item a gente cria um novo elemento do tipo 'td', Data.
    snapshot.forEach(function (item) {
        var td = document.createElement('td');
        td.appendChild(document.createTextNode(item.val().data));
        addTdData.appendChild(td);
    });
});







