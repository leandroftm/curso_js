
  //alert("Mensagem de Teste enviada pelo alert");

  //console.log("Mensagem de Teste enviada pelo console");

  //aula 10
  //  var conteudo_caixa = document.getElementById("caixa_azul").innerHTML;

  //document.getElementById("caixa_azul").innerHTML = '<h1>' +  conteudo_caixa  + '</h1>';
 


  // // a fórmula do IMC é: peso em kg / (altura em metros x altura em metros)

  //   function calc_imc(peso,altura) {
  //     var imc = peso / (altura * altura);
  //     return imc;
  // }

  // // agora podemos rodar a função com os valores que quisermos e assim clacular o IMC:

  // // var meu_peso = document.getElementById("peso").innerHTML;
  // // var minha_altura = document.getElementById("altura").innerHTML;

  // var meu_peso = 78;
  // var minha_altura = 1.80;

  // document.getElementById("peso").innerHTML = meu_peso; 
  // document.getElementById("altura").innerHTML = minha_altura.toFixed(2); 
  // document.getElementById("imc").innerHTML = parseFloat(calc_imc(meu_peso,minha_altura).toFixed(2)) ; 

  //aula 19
/*      
  document.getElementById("click-me").onclick = function() {
    alert('Você clicou no botão');
};

document.getElementById("hover-me").onmouseover = function() {
    alert('Você passou o cursor por cima do botão');
};

document.getElementById("leave-me").onmouseout = function() {
    alert('Você passou o cursor por cima do botão e depois saiu');
};

document.onkeydown = function() {
  alert('Você apertou a tecla: ' + event.keyCode);
};

function button_clicked(){
  alert("botão clicado");
} */

//aula 20
/* document.getElementById("botao_cor").onclick = function() {
  document.getElementById("botao_cor").style['background-color'] = "purple";
  document.getElementById("botao_cor").style.transform = "translateX(100px)";
}; */

/* temos que usar a notação com colchetes com o background-color 
porque o nome da propriedade contém um traço. Falamos isso na aula sobre objetos. */

/* document.getElementById("botao_cor").onclick = function() {
  this.style['background-color'] = "purple";
  this.style.transform = "translateX(100px)";
}; */
