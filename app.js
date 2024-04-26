console.log("Rodando o sistema de gerenciamento de Jogos")


// 1. Question Elabore um algoritmo que contenha uma função chamada “Operacao”, a qual recebe 2 parâmetros e, após as operações, 
//imprima a soma da exponenciação, o resto da divisão do primeiro pelo segundo e a subtração do segundo pelo primeiro.

let n1 = parseFloat(prompt('Digite o primeiro número: '));
let n2 = parseFloat(prompt('Digite o segundo número: '));

function Operacao(n1, n2){
 somaExponenciacao = n1 ** n2;
   console.log('Soma da exponenciação:', somaExponenciacao);
 restoDivisao = n1 % n2;
   console.log('Resto da divisão do primeiro pelo segundo:', restoDivisao);
 subtracao = n2 - n1;
console.log('Subtração do segundo pelo primeiro:', subtracao);
}

Operacao(n1, n2);

// 2.a) Implemente um algoritmo que solicite ao usuário o valor, em dinheiro, aplicado e a quantidade de meses em aplicação, considerando que a taxa de juros, por mês, é de 0,6022%. 
//Ao final, imprima o valor aplicado inicialmente, a quantidade de meses e o valor final com o acréscimo de juros, em “Template String”, da seguinte forma: A quantia de R$[CapitalAplicado] 
//aplicada em [TempoDeAplicacao] meses, rendeu R$[ValorRendimento] a juros de [TaxaDeJuros]. Caso o valor informado for menor que 0 ou diferente de um número, o algoritmo deve apresentar uma alerta na tela com a seguinte mensagem: 
//“Valor informado inválido! Por favor, informe o valor depositado na poupança”.Em seguida, solicite novamente ao cliente o valor aplicado na poupança e a quantidade de meses, até que o valor válido seja informado.

function rendimentos() {
  TaxaDeJuros = 0.6022 / 100;
  CapitalAplicado = parseFloat(prompt('Informe o valor aplicado na poupança:'));
  TempoDeAplicacao = parseInt(prompt('Informe a quantidade de meses em aplicação:'));

  if (CapitalAplicado === 0 || TempoDeAplicacao === 0 || CapitalAplicado <=  0 || TempoDeAplicacao <= 0) {
      alert('Valor informado inválido! Por favor, informe o valor depositado na poupança e a quantidade de meses em aplicação.');
      rendimentos(); 
 }  else {
      valoDoRendimento = CapitalAplicado * (1 + TaxaDeJuros) ** TempoDeAplicacao;
      console.log(`A quantia de R$${CapitalAplicado} aplicada em ${TempoDeAplicacao} meses, rendeu R$${valoDoRendimento.toFixed(2)} a juros de ${TaxaDeJuros * 100}%.`);
}
}

rendimentos();

// 2.b) Faça um algoritmo que, se o capital aplicado for maior ou igual a R$999,99 e menor ou igual R$10.000,00 e o tempo de aplicação for maior que 5 meses e menor que 12 meses, a taxa de rendimento deve ser 2%. 
//O algoritmo deve solicitar ao cliente o valor do capital aplicado e o tempo de aplicação e, após a operação, o programa deve exibir na tela, o valor aplicado, a quantidade de meses em aplicação e o valor de rendimento em R$, utilizando o “Tamplate string”, da seguinte forma: 
//A quantia de R$[CapitalAplicado] aplicada em [TempoDeAplicacao] meses, rendeu R$[ValorRendimento]. Caso o valor informado for menor que 0 ou diferente de um número, o algoritmo deve apresentar uma alerta na tela com a seguinte mensagem:
//“Valor informado inválido! Por favor, informe o valor depositado na poupança”. Em seguida, solicite novamente ao cliente o valor aplicado na poupança e a quantidade de meses, até que o valor válido seja informado.


function rendimento() {
  CapitalAplicado = parseFloat(prompt('Informe o valor aplicado na poupança:'));
  TempoDeAplicacao = parseInt(prompt('Informe a quantidade de meses em aplicação:'));
  TaxaDeJuros = 0;

  if(CapitalAplicado === 0 || TempoDeAplicacao === 0 || CapitalAplicado <=  0 || TempoDeAplicacao <= 0) {
      alert('Valor informado inválido! Por favor, informe o valor depositado na poupança e a quantidade de meses em aplicação.');
      calcularRendimento(); 
      return; 
}

  if (CapitalAplicado >= 999.99 && CapitalAplicado <= 10000 && TempoDeAplicacao > 5 && TempoDeAplicacao < 12) {
      TaxaDeJuros = 0.02;
} else {
      TaxaDeJuros = 0.006022; 
}

  valorDoRendimento = CapitalAplicado * (1 + TaxaDeJuros) ** TempoDeAplicacao;
  console.log(`A quantia de R$${CapitalAplicado} aplicada em ${TempoDeAplicacao} meses, rendeu R$${valorDoRendimento.toFixed(2)}.`);
}

rendimento();

//

