// fazendo funcionar o relogio
var r = document.getElementById('relogio');

function atualizaHora(){
    var hoje = new Date();
    var h = hoje.getHours();
    var m = hoje.getMinutes();
    var s = hoje.getSeconds();
    if(h < 10)
        h = '0' + h;
    if(m < 10)
        m = '0' + m;
    if(s < 10)
        s = '0' + s;
    r.textContent = h + ":" + m + ":" + s;
}

setInterval(atualizaHora, 1000); // tempo em milisegundos
// Crtl + Shift + R








//////////////////////////////////

const raiz = document.getElementById('lista');

// var xhr = new XMLHttpRequest();
// xhr.open('GET', 'http://juliovasquez.pythonanywhere.com/api/funcionarios');

// xhr.onload = function(){
//     var data = JSON.parse(xhr.response);
//     data.funcionarios.forEach(element => {
//         // criamos a linha da tabela
//         var linha = document.createElement('tr');
//         raiz.appendChild(linha);

//         // criamos as colunas
//         var funcionario = document.createElement('td');
//         funcionario.textContent = element.nome_usuario;
//         linha.appendChild(funcionario);

//         var hora = document.createElement('td');
//         hora.textContent = element.data;
//         linha.appendChild(hora);
//     });
// }
// xhr.onerror = {}

// xhr.send();

fetch('/funcionarios') // GET por default
.then(res => {return res.json();})
.then(data => {
    data.funcionarios.forEach(element => {
        // criamos a linha da tabela
        var linha = document.createElement('tr');
        raiz.appendChild(linha);

        // criamos as colunas
        var funcionario = document.createElement('td');
        funcionario.textContent = element.nome_usuario;
        linha.appendChild(funcionario);

        var hora = document.createElement('td');
        hora.textContent = element.hora;
        linha.appendChild(hora);
    });
})
.catch( err => {
    console.log('Ocorreu um problema.');
})
.finally(() =>{
    console.log('Linha que sempre aparece no final');
})