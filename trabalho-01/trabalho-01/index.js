const formula = document.querySelector('.input')
const formula2 = document.querySelector('.input2').value
const formula3 = document.querySelector('.input3').value
const formula4 = document.querySelector('.input4').value
const resultados = document.querySelector('.resultados')
const resultados2 = document.querySelector('.resultados2')
const resultados3 = document.querySelector('.resultados3')
const resultados4 = document.querySelector('.resultados4')
const botao = document.querySelector('.botao')


function gerarResultadoFormula() {
  let Sformula = String(formula.value)
  executar(Sformula, resultados)
  formula.remove()
  botao.remove()
}

executar(formula2, resultados2)
executar(formula3, resultados3)
executar(formula4, resultados4)

function executar(input, output) {


  const pilha = []
  const regra = {}

  const regraArray = input.split(';');
  for (const r of regraArray) {
    const [naoTerminal, productions] = r.split('=');
    regra[naoTerminal] = productions.split('|');
  }

  function resultadoAleatorio(regra, naoTerminal) {
    const opcoes = regra[naoTerminal];
    if (!opcoes) {
      return naoTerminal;
    }

    const respostaAleatoria = opcoes[Math.floor(Math.random() * opcoes.length)];

    console.log(`resposta aleatoria: ${respostaAleatoria}`);


    incluirNaPilha(respostaAleatoria)
  }

  function incluirNaPilha(respostaAleatoria) {

    const dado = respostaAleatoria.split('')

    for (let i = 0; i < respostaAleatoria.length; i++) {
      pilha.push(dado[i])
    }

    console.log(`pilha : ${pilha}`)

    implementarResultado(pilha)
  }

  let result = '';

  function implementarResultado(pilha) {
    let resultado = document.createElement('p')
    while (pilha.length > 0) {
      if (pilha[0] === pilha[0].toLowerCase()) {
        result += pilha[0];
        resultado.textContent = result
        output.appendChild(resultado)
      } else {
        result += pilha[0]
        resultado.textContent = result
        output.appendChild(resultado)
        result = result.substring(0, result.length - 1);
        let aux = pilha[0]
        pilha.shift()
        resultadoAleatorio(regra, aux);
      }
      pilha.shift()

      console.log(`pilha 2: ${result}`)
    }

    return result;
  }

  const generatedString = resultadoAleatorio(regra, 'S');




}
