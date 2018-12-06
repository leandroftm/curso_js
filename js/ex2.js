console.log("Exercicio 1");
console.log("--------------------------------------");

var num1 = parseInt(document.getElementById("num_1").innerHTML);
var num2 = parseInt(document.getElementById("num_2").innerHTML);
var resultado = num1 + num2;

document.getElementById("resultado").innerHTML = '<strong>' + resultado + '</strong>';

console.log('Resultado :' + resultado);
console.log("--------------------------------------");

console.log("Exercicio 2");
console.log("--------------------------------------");
function converte(celsius)
{
  var far = ( (9 * celsius) / 5) + 32;
  return far;
}

var celsius = parseFloat(document.getElementById("caixa_azul").innerHTML);
var farenheit = converte(celsius);

document.getElementById("caixa_amarela").innerHTML = farenheit;

console.log('Resultado :' + farenheit);
console.log("--------------------------------------");

console.log("Exercicio 3");
console.log("--------------------------------------");

var grupos = [ 
  [ "João" , "Maria" ],
  [ "Pedro" , "Joana", "André", "Júlio" ],
  [ "Carolina" , "Helena", "Marcelo" ]
]; 

var novo_array = grupos.slice(-2,);

novo_array.push( ["Mariana", "Felipe", "Carla"] );

console.log(novo_array);
console.log("--------------------------------------");

console.log("Exercicio 4");
console.log("--------------------------------------");
var curso = {
  'titulo': "Aprenda programação em Python",
  'categoria': ['programação', 'tecnologia', 'python'],
  'n_aval_5_estrelas': 420,
  'n_aval_4_estrelas': 80,
  'n_aval_3_estrelas': 33,
  'n_aval_2_estrelas': 20,
  'n_aval_1_estrela': 4,
  'total_aval': function(){
    var totalAvaliacoes = this.n_aval_1_estrela + this.n_aval_2_estrelas + this.n_aval_3_estrelas + this.n_aval_4_estrelas + this.n_aval_5_estrelas;
    return totalAvaliacoes;
  },
  'media_aval': function(){
    var media = ( (1 * this.n_aval_1_estrela) + (2 * this.n_aval_2_estrelas) + (3 * this.n_aval_3_estrelas) + (4 * this.n_aval_4_estrelas) + (5 * this.n_aval_5_estrelas) ) / this.total_aval();
    return media;
  }
}

var categoria_principal = curso.categoria[0];
document.getElementById("categoria_principal").innerHTML = categoria_principal;
console.log('Resultado 1 :' + categoria_principal);

console.log( curso.total_aval() );

console.log( curso.media_aval() );

document.getElementById("total_aval").innerHTML = curso.total_aval();

document.getElementById("media_aval").innerHTML =  curso.media_aval().toFixed(2);

console.log("--------------------------------------");
console.log("Exercicio 5");
console.log("--------------------------------------");

var pessoa = {
'nome': 'Nome da pessoa',
'sobrenome': 'Sobrenome da Pessoa',
'email': 'E-mail da pessoa'
};

function exibeTabela(person)
{
  document.getElementById("tabela").innerHTML = 
  "<div class=\"tableBox\">" +

  "<table>" +

      "<tr>" +
          "<th>Nome Completo</th>" +
          "<th>Email</th>" +
      "</tr>" +
      "<tr>" +
          "<td>" + (person.nome + ' ' + person.sobrenome) + "</td>" +
          "<td>" + person.email + "</td>" +
      "</tr>" +
      
  "</table>" +
  
"</div>"
}

exibeTabela(pessoa);
console.log(pessoa);


