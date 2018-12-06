//F = (9 * C / 5) + 32

//1


document.getElementById("converter").onclick = function(){
  var celsius = document.getElementById("temp_celsius").value;
  var farenheit = ((9 * celsius) / 5) + 32; 
  document.getElementById("temp_fahr").innerHTML = farenheit; 
  console.log('Celsius = ' + celsius);
  console.log('Farenheit = ' + farenheit);
}

//2
function lista(data)
{
  for(i=1930; i <= data; i+=4)
  {
    document.getElementById("anos_copa").innerHTML +=
    "<li>" + i + "</li>";
    //console.log(i);
  }
}

lista(new Date().getFullYear());

//3




document.getElementById("calcular").onclick = function(){
  var nota1 = parseFloat(document.getElementById("nota1").value);
  var nota2 = parseFloat(document.getElementById("nota2").value);
  var faltas = parseInt(document.getElementById("n_faltas").value);

  var resultado;
 
  if( faltas > 6 )
  {
    console.log(faltas);
    resultado = "Reprovado por falta";
    if(  (nota1 + nota2) / 2 < 6.5 )
      resultado += " e reprovado por nota.";
  }
  else if(  (nota1 + nota2) / 2 < 6.5 )
  {
    resultado = "Reprovado por nota";
  }
  else
  {
    resultado = "Aprovado";
  }
  //console.log(resultado);
  document.getElementById("result").innerHTML = "<strong>"+ resultado + "." + "</strong>";  

}


var vendas_cursos = [

  {
      'aluno': 'Emmanuel Gomes',
      'data': '10/06/2018',
      'valor': 34.99,
      'reembolso': null
      
  },

  {
      'aluno': 'Carla Dias',
      'data': '10/06/2018',
      'valor': 29.99,
      'reembolso': null
      
  },

  {
      'aluno': 'Rafael Marques',
      'data': '11/06/2018',
      'valor': 39.99,
      'reembolso': '13/06/2018'
      
  },

  {
      'aluno': 'Maria Isabel Pereira',
      'data': '11/06/2018',
      'valor': 29.99,
      'reembolso': null
      
  },

  {
      'aluno': 'Andre Luis Silva',
      'data': '12/06/2018',
      'valor': 34.99,
      'reembolso': null
      
  }

];

//vendas_cursos

function tabela(venda)
{

  var vendas = 0;

  for(i = 0; i < venda.length; i++)
  {
    if(venda[i].reembolso == null)
    {
      document.getElementById("vendas_cursos").innerHTML += 
      "<tr>" + 
        "<td>" + venda[i].aluno + "</td>" + 
        "<td>" + venda[i].data + "</td>" + 
        "<td>" + venda[i].valor + "</td>" + 
      "</tr>"
      vendas++;
    }
  }

  document.getElementById("total_vendas").innerHTML = vendas;

}

tabela(vendas_cursos);

