//2
var v_nome = "Leandro Torres";
var v_idade = 1989;
var v_hoje = new Date().getFullYear();

console.log("Olá, eu me chamo " + v_nome + ", tenho " + (v_hoje - v_idade) + " anos e estou estudando Javascript.");

//3
var v_alunoNome = "Nome do Aluno";
var v_alunoMatricula = "123456";
var v_alunoNota1 = 8;
var v_alunoNota2 = 9;
var v_media =(v_alunoNota1 + v_alunoNota2) / 2;

console.log("O aluno " + v_alunoNome + ", matrícula " + v_alunoMatricula + ", obteve a média final " + v_media);

//4
var v_numeroTel = "123456789";

if(v_numeroTel.length == 9)
{
  console.log("Resultado do teste: true");
}
else
{
  console.log("Resultado do teste: false");
}

//5
var v_potencia = Math.pow(32,6);

console.log(v_potencia);

//6
// c - var typeof - pois contém nome de uma keyword
// d - var nome-aluno - pois contém -
// f - var 2a_tentativa - pois começa com número
// g - var nome completo - pois contém espaço


//7
/* var quantidade = "25";
var numero = 6;
var pressao;
var temperatura = 40;
temperatura = null;

console.log(quantidade += quantidade); -> 25 + 25 = 2525
console.log( (7+5) / numero + 2 ); -> 12 / 6 + 2 = 4
console.log(pressao); -> undefined
console.log(temperatura); -> null
console.log(typeof pressao); -> undefined
console.log(typeof temperatura); -> object */

//8
/* var idade = 65;

console.log(idade != 65); -> false
console.log(idade >= 65); -> true
console.log("65" == idade); -> true
console.log(65 !== idade); -> false
console.log(typeof (idade > 60)); bool
console.log(typeof (idade > 70)); bool
 */

