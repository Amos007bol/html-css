

//  FIM
// console.log('Olá Mundo!');


// Comentário em Linha

/*
Comentário em bloco
*/

// COMENTÁRIO EM LINHA
/*
COMENTÁRIO EM BLOCO
*/

//VIDEO 13: ESTRUTURAS for, forEach, while, do while no JS:

// L 3
// let carros = ['Fusca', 'Brasília', 'Gurgel']

// FOR = para faca
// i = iterador, interacao ou index
// for (let i = 0; i < 5; 1++) {
// document.write(i + '')
// }

// L 11
// for (let i = 0; i < carros.length; i++) {
// document.write(`<li>${carros[i]}</li>`)
// }

// L 15 FOREACH forEach = para cada
// let frutas = ['Pera', 'Uva', 'Maçã', 'Banana', 'Melancia']

// FIM  DO VIDEO 13

// VIDEO 12: ESTRUTURAS IF ELSE E SWITCH CASE NO JS:
// CONDICIONAIS E DE ESCOLHA
// let sit1 = document.querySelector('#sit1')
// let sit2 = document.querySelector('#sit2')
// let sit3 = document.querySelector('#sit3')
// let escolha = document.querySelector('#escolha')

// let notaFinal1 = 3
// let notaFinal2 = 8
// let notaFinal3 = 5

// CONDICIONAIS

// L 16
// IF
// if (notaFinal1 >= 7) {
// sit1.textContent = 'Aprovado'
// }

// L 21
// IF ELSE
// if (notaFinal1 >= 7) {
// sit1.textContent = 'Aprovado(a)'
// } else {
// sit1.textContent = 'Reprovado(a)'// 'Reprovado(a)'
// }

// IF TERNARIO
// notaFinal3 >= 7  ? se.textContente = 'Passou' : 'Ficou'

// L 31
// IF ENCADEADO OU ANINHADO
// if(notaFinal3 >= 7) {
// sit1.textContent = 'Aprovado'
// } else if (notaFinal3 <= 3) {
// sit1.textContent = 'Reprovado'
// } else {
// sit1.textContent = 'Recuperação'
// }

// L 40
// ESCOLHA CASO
// let situacao = ''
// let situacao = 'Aprovado'
// let situacao = 'Reprovado'
// let situacao = 'Recuperacao'

// L 46
// switch(situacao) {

// case 'Aprovado':
// escolha.textContent = 'Passou de ano'
// break

//case 'Reprovado':
// escolha.textContent = 'Não passou de ano'
// break

// case 'Recuperacao':
// escolha.textContent = 'Ainda tem uma chance'
// break

// L 60
// default:
// escolha.textContent = 'Estude'
// default nao precisa de break
// }


// FIM DO VIDEO 12



// VIDEO 11: EVENTOS NO JS
// L  3
// function carregou() {
// console.log ('Página carregada com sucesso!' )
// }

// function focou() {
// console.log('Foco no título')
// }

// L 11
// function rolouPagina() {
// console.log('Pagina rolando')
// }

// function focoNoCampo() {
// console.log('Foco no campo de texto')
// }

// L 19
// function semFocoNoCampo() {
// console.log('Saiu o foco do campo de texto')
// }

// L 23
// let letras = document.querySelector('input[type=text]')
// function avisarQueTeclou() {
// let numLetras = 1
// console.log('Está teclando' + (letras.value.length + numLetras))
// }

// let botao1 = document.querySelector('#btn1')
// let botao2 = document.querySelector('#btn2')
// let botaoEnviar = document.querySelector('#btn3')

// L 33
// mouseover a seta de mouse esta no element
// Função anonima
// botao1.addEventListener('mouseover',
// function () {
// console.log('Foco no botão 1')
// })

// L 38
// focoout ou blur quando sai o foco
// botao2.addEventListener('blur', function ()
// {
// console.log('Foco no botão 2')
// })

// 1 click do mouse
// botaoEnviar.addEventListener('click',
// function (event) {
// event.preventDefault()
// console.log('Clicou no botão Enviar')
// })

// FIM VIDEO 11

// VIDEO 10: FUNÇÕES EM JS [EXTRA] ARROW FUNCTION EM JS:
// L 3
// let titulo = document.querySelector('h1')
// titulo.textContent = 'Funções no JS'
// let box = document.querySelectorAll('box')

//* Funções sem parâmetros e sem retorno (procedure) */
// function olaMundo() {
// document.write('Olá Mundo sem retorno<br>')
//}

//* Funções sem parâmetros e com retorno (function) */
// function olaMundo2() {
// return 'Olá Mundo com retorno<br>'
// }

// L 17
// CHAMAR A FUNÇÃO =  EXECUTAR ELA
// 1º opção: olaMundo()
// 2º opção : document.write(olaMundo2())
// olaMundo()
// document.write(olaMundo2())

// L 21
// let x = 2
// let y = 1
//let mensagem = 'Jesus Cristo é o Salvador'

//* Funções com parâmetros e sem retorno (procedure) */
// function somar(a, b) {
//document.write((a + b) + '<br>')
// }

/* Funções com parâmetros e com retorno (function) */
// function somar2(c, d) {
// return c + d
// }

// CHAMAR A FUNÇÃO = EXECUTAR ELE
// somar(x, y)
// somar(10, 5)

// document.write(`<p>${somar2(x, y)}</p>`)
// document.write(`<p>${somar2(5, 2)}</p>`)

// L 42
/* função anonima = não tem nome
pode ou não ter parâmetros
pode ou não ter retorno
*/

// titulo.addEventListener('click', function
// () {
// console.log('clicou no título')
// })

//  L 52
// Arrow Functions neste ex. c/ chaves usar Q tiver 2 ou + ações
//const nomeFuncao = () => {
// acoes
// }

/* Arrow Functions ES6 2015 em diante*/
// const olaMundoArrow = () => document.write
// ('Olá mundo!!!!!')

// não precisa usar a palavra function
// não precisa usar a palavra return
// não se usa nome na função
// não precisa colocar {} se for so uma instrução
// const olaMundo2Arrow = () => '<p>Olá mundo com arrow function</p>'

// L 60
// olaMundoArrow()
// document.write(olaMundo2Arrow())

// FIM DO VIDEO 10



// VIDEO 09: DOM MANIPULAR CSS COM JS.

// fazer alteração por modo (por tag,ide class )
// textContent faz a alteração
// innerHTM faz tbm alteração

// let titulo = document.querySelector("h1") // L 3
// titulo.textContent = "Aula css"
// titulo.innerHTML = 'Aula Manipular'
// let Imagem = document.querySelector("#foto")
// imagem.setAttribute("src", "..//foto buzios 205.jpg") // L 7
// imagem.setAtribute('width', '250px')

/* MANIPULANDO CSS  L 12 */
// titulo.style.color = 'white';
// document.querySelector("h1").style.color ="red"; //  OU
// document.querySelector("h1").style.backgroundColor= "#000"; // fundo
// document.querySelector("h1").style.borderBottom = "2px solid red";
// titulo.style.padding = '0.625rem'; // expansão
// titulo.style.borderRadius = '5px';

// L 18
// let box = document.querySelectorAll('box')
// box[0].setAttribute('class', 'escura')
// box[0].removeAttribute('class')

// L 22 MODOS DE COR
// let tela = document.querySelector('main')

// let btnDark = document.querySelector('#btdark')

// let btnLight = document.querySelector('#btlight')

// L 29
// btnDark.addEventListener('click', modoDark)
// btnLight.addEventListener('click', modoLight)

// function modoDark(){
// event.preventDefault();
// console.log('modo dark')
// tela.classList.add('dark');
// tela.classList.remove('light');
// }

// L 38
// function modoLight() {
// event.preventDefault();
// console.log('modo light')
// tela.classList.remove('dark');
// tela.classList.add('light');

// }

// FIM DO VIDEO 9


// VIDEO 08: DOM MANIPULAR HTML COM O JS.

/*
Arquivo JS aula 08 DOM
// DOM = Document Object  Model
// Arvore com elementos desde o Browser, a Janela do Browser, o Documento e cada elemento html que formam os conteúdos. */

/*
navigator
window
location
document -> html -> head e body
history
No JS Tudo isso é um objeto que pode ser acessado
*/

// PARA MANIPULAR O DOM PRECISAMOS
// indicar qual objeto usar, depois
// chamar um método(função) para
// selecionar ele, seus dados, trazer
// informações. etc.

// L 20
// Selecionando por: TAG  ('h1')
//  OU ID ('#titulo')
// Selecionando Por: CLASS ('.box')
// document.querySelectorAll('h2') Acessa todos de uma classe ou tag
// Eu Posso chamar a tag e ver o conteúdo

// document.querySelector('h1')
// document.querySelector('#titulo')
// document.querySelector('.box')
// document.querySelector('h2')
// document.querySelectorAll('h2') // entrada p/ acessar todos de uma classe
//
// .querySelector()
// selecionar elemento com base na tag. #id ou .class
// let titulo = document.querySelector('h1')
// Eu preciso alterar ele, existe o (titulo.textContent)
// temos tbm o (titulo.textContent = 'DOM') assim iremos alterar p/ DOM
// Vamos ver o conteúdo da (tag) posso atribuir um outro valor
// let titulo = document.querySelector('#titulo')
// console.log(titulo)

// .textContent
// propriedade ou atributos textContent
// serve para acessar ou alterar conteúdo
// de um elemento que foi selecionado
// console.log(titulo.textContent)
// console.log(titulo.innerHTML)
// L 28

// L 30 Temos atribuição da mudança
// ALTERAMOS O CONTEÚDO
// no HTML Não altera (VIDEO 08 P/ DOM )
// titulo.textContent = 'Fast Táxi'
// console.log(titulo.textContent)

// .querySelectorAll()
// selecionar todos elementos com base na tag. #id ou class
// alterando p/texto qualquer (box 1  texto 1)
// let testando = document.querySelectorAll('.box')
// console.log(testando)
// document.write(testando[0].textContent)
// document.write(testando[1].textContent)
// document.write(testando[2].textContent)
// testando[0].textContent = textQualquer // alterando p/texto qualquer

// L 42
// Existem também os métodos
// MAS, PREFIRA USAR O .querySelector()
/*
.getElementsByTagName()
.getElementsById()
.getElementsByClassName()
*/

// L 50
// let testeTag = document.getElementsByTagName('div')
// console.log(testeTag)
// document.write(teteTag[0].textContent)
// document.write(teteTag[1].textContent)

// let testeId = document.getElementById('título')
// console.log(testeId)

// L 58
// let.testeClass = document.getElementsByClassName('box')
// console.log(testeClass)
// document.write(testeClass[0].textContent)
// document.write(testeClass[1].textContent)

// FIM DO VIDEO 08



// VIDEO 7: SOLUÇÃO DOS 4 DESAFIOS EM JS:

// FIM DO VIDEO 7


// VIDEO 6 REVISÃO E DESAFIOS EM JAVASCRIPT:
// Criar variáveis use ( let ou var )
// Tipo de dados ('', "")
// Tipo Numérico pode ser: Real, Float ou Inteiro
// Podemos tbm fazer operações
// No document. write tudo dentro será texto
// Se Eu quiser colocar o conteúdo de uma (var,constant,objeto)
// eu começo c/ ${`precoTotal`} conf. neste ex. escrever em tela
// Um extra (new Intl) um objeto colocar no padrão Brasil
// formatando um determinado valor p/ padrão Brasil
// no caso ( , p/ decimal) e ( . para casa de milhar ou agrupador)
// Qual é a localidade 1ª Parâmetro ('pt-BR',)
// 2ª objeto, qual os dados,dados monetário {style: 'currency'}
// poderia tbm colocar (currency percentual, decimal)
// esses são os três  básicos numéricos
// (BRL) símbolo monetário

// let produtos = 'Arroz'
// let quant = 2
// let precoUnitario = 4.99
// let precoTotal = quant * precoUnitario
// document.write(`Preço Total R$ ${precoTotal}<br>`)
// console.log(new Intl.NumberFormat('pt-br').format(precoTotal))

// document.write(`Preço Total ${precoTotal.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL'})} <hr>`) // este ex. é recomendado

// CRIAR CONSTANTE
// (constant) e espaço na memória cria um identificador e atribuímos
// um valor ele vai ser mutável ele ñ será modificado a não ser
// em situações bem especiais
// poderia tbm criar (let)
// const nome = 'Edna Vieira'
// const peso = 83.5
// const altura = 1.75
// const imc = peso / (altura * altura)

// document.write(`IMC: ${imc}  <br>`)
//document.write(`IMC: ${imc.toFixed(2)} <br>`)


// CRIAMOS UMA (VAR let)
// com valores Reais ou float
// Fiz o calculo nota final
// fiz o (document.write) p/ escrever aqui ñ estou trabalhando
// c/ template string.
// Temos aqui neste ex É: (string, operador + Q è concatenação
// c/ conteúdo da Nota Final, concatenado c/ a tag <br> )
// Nota Final (17)
//
// let nota1 = 7.5
// let nota2 = 5.5
// let nota3 = 4.0
// let notaFinal = nota1 + nota2 + nota3
// document.write('Nota Final' + notaFinal + '<br>')


// CRIAMOS UMA (VAR let)
// Valor (X)
// Desconto (Y)
// resposta: R$ 1.854,57 formato monetário do Brasil
// (C/ toLocaleString)
// Sem  ele fica no formato Americano
// Resposta: 1854.57

// let compra = 1999.99
// let desconto = 145.42
// let compraComDesconto = compra - desconto

// document.write(compraComDesconto.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }) + '<br>' )

// document.write(compraComDesconto + '<br>')

// FIM DO VIDEO 6


// VIDEO 5: ARQUIVO JS Objetos em JavaScript:
// CRIAR OBJETO
// Criar uma var(pessoa)e armazenar atributos ou propriedades da pessoa
// eu posso utilizar variáveis (let, var, const)
// eu posso atribui valores conf ex.abaixo como: nome, idade etc.

// CRIEI UMA (var-pessoa) (objeto) entre chaves atribuindo valores:
// Colocamos os elementos que vai compor ex. nome, idade etc.
// Entre chaves (var pessoa é um objeto)
// Posso usar:(var, let, const )
// let pessoa = {
// nome : 'Edna',// separar uma propriedade de outra utiliza (,)no final
// idade : 40,
// peso : 83.5,
// altura : 1.75,
// doador : false,// a ultima propriedade Ñ é obrigatório a (,)
// }


// CRIEI UMA VARIÁVEL PRODUTOS (NESTE CASO É UM OBJETO)
// Entre chaves colocamos o elemento Q vai compor o nosso objeto
// conforme ex. abaixo (descrição, preço etc.)
// Elementos do objeto são propriedades ou atributos
// Descrição: na forma de texto("",) é uma propriedade de Array
// Preço: (0.0) para indicar Q é um Nº. é um Array de preço
// Ou criar um Array Vazio [],
// Sempre que separar uma propriedade de outra utilizar a (,)

// let produtos = {
// descricao : [], // se fosse em forma de texto "",
// preco : []// indicar se fosse em forma de Nº 0.0 -  ou Array Vazia
// }


// CRIEI UMA (var-const) ( neste caso é um objeto)
// Entre chaves colocamos o elemento Q vai compor em nossa (var) objeto
// Criamos uma (var-const carro) entre chaves e dentro de chaves
// especificamos o conteúdo como: marca,modelo, ano etc. é um objeto
// const carros = {
// marca : ['Ford', 'Fiat', 'GM'],
// modelo : ['Ka', 'Uno', 'Corsa'],
// ano : [1999, 2005, 2010] // a ultima propriedade Ñ é obrigatório a (,)
// }

// COMO ACESSAR UMA PROPRIEDADE USANDO
// Temos duas formas utilizando:
// 1º .nome - da propriedade
// 2º ['' ou ""] - colchetes e aspas

// pessoa.nome
// pessoa.idade
// pessoa.peso
// pessoa.altura

// ACESSAR PROPRIEDADE usando ['', ou ""]

// pessoa['nome']
// pessoa['idade']
// pessoa['peso']
// pessoa['altura']


// OPERAÇÃO IMC = peso / (altura * altura)
// Criei uma (var-imc) Q é um index de massa corporal
// Q é feita através de uma operação simples
// Q é :  peso, divide pela altura, multiplicado pela altura.
// limita o numero de casas decimais
// Pessoa.altura está entre aspa porque eu quero que esta
// operação seja feita primeiro.
// Usando o .toFixed(2) limita o Nº de casas decimas

// let imc = pessoa.peso / (pessoa.altura * pessoa.altura)

// .toFixed(X)
// console.log("IMC" + imc.toFixed(2))

// ALTERAR/ATUALIZAR VALOR de propriedade:
// Através do operador de atribuição podemos passar um novo valor
// para aquela propriedade ou atributo do objeto
// Para 2º e 3º ou mais alteração não posso utilizar este recurso
// ele irá subscrever.

// pessoa.nome = 'Edna Vieira' //acrescentando o sobre nome (Edna Vieira)
// produtos.descricao = ['Arroz'] // P/ 2º e 3º alteração Ñ posso usar
// produtos.preco = [4.99]


// USANDO spreed operator Utilizar Esta opção para acrescentar
//  + de um objeto na variável.
// Aqui estou dizendo Q o nosso objeto produtos/descricao vai receber
// uma cópia do meu array produtos e eu quero adicionar o "Feijão"
// Aqui estou acrescentando (var pessoa- nome e sobrenome) é um objeto

// produtos.descricao = [...produtos.descricao, 'Feijão', 'Trigo']
// produtos.preco = [...produtos.preco, 9.99, 4.79]
// pessoa.nome = 'Edna Martins'



// USANDO spreed operator em objetos const:
// Utilizar Esta opção para acrescentar
// Na (var-const carros) Vamos acrescentar + um modelo é um objeto

// carros.marca = [...carros.marca, 'WV']
// carros.modelo = [...carros.modelo,'Fusca']
// carros.ano = [...carros.ano, '1979']

// FIM DO VIDEO 5


// VIDEO 4 : Array, métodos, length e spred operator
//let produtos: string[] é uma array
// criei uma variável (let-produtos) Q é uma Array c/ objetos
// let produtos = ['Arroz', 'Feijão', 'Leite']
// var codigos = Array(10, 20, 30)// esta forma Ñ é muito utilizada
// var test = Array(10) // criei uma array test c/ 10 posições
// test[0] = 'Oi' // ver no console
// test[9] = "Tudo bem?"
// test[10] = 'Opa!'
// let meses = ['Jan', 'Fev', 'Mar', 'Abr']
// meses[0] = ['Janeiro','Fevereiro'] // ver no console
// meses[0] = ['Janeiro']

// ADICIONAR NO FINAL push = empurre
// Adicionando no final da Array ( var-códigos - 40,50,60 )
// Adicionando (Açúcar e Trigo)
// produtos.push('Açúcar', 'Trigo')
// codigos.push(40, 50, 60, 70)
// meses.push('Mai', 'Jun', 'Aug', '07')

// REMOVE DO FINAL pop = estourar
// retirando da (var-produtos) do Array o (trigo) final da lista
// retirando da (var-códigos) do Array o (70) final da lista
// produtos.pop()
// codigos.pop()
// meses.pop() // retirando do Array o 07 da lista
// meses.pop() // retirando o Array 0 mês Ago da lista

// ADICIONAR NO INÍCIO unshift
// Adicionando (Uva e Maçã) no inicio da var produtos
// produtos.unshift('Uva', 'Maçã')

// REMOVE DO INÍCIO shift
// Retirando 1º objeto do Array(Uva) no inicio da var produtos
// produtos.shift()

// REMOVER DE UMA POSIÇÃO ESPECIFICA splice
// Removendo da (var-códigos)os (Nº 20,30,40 ) Array do index 1 ao 3
// solice = emendar
// posicao inicial, quantos remover
// codigos.splice(1, 3)

// COPIAR ARRAY slice = fatiar porção
// posicao inicial, quantos remover
// let meses1 = meses.slice() // copiando array meses mesmos itens
// let meses2 = meses.slice(0,3)// copiando o array do itens:(0 ao 3)

// VER TAMANHO DO ARRAY length comprimento
// meses.length // ver quantos elementos tem no array
// meses1.length // ver no console (meses.length)     "
// meses2.length // "     "

// spreed operator : é uma (... reticências) copia e adiciona no array
// este é um recurso novo
// let teste = [...produtos, 'Ovo', 'Pera'] //adicionando no array produtos ver no teste ttl de produtos será(4)

// FIM DO VIDEO 4


// Video 3 Arquivo JS Operadores e Operações.
// let n1 = 10 // number inteiro
// let n2 = 2 // number inteiro
// let n3 = "2" // string texto considerado texto está entre("")

// document.write(`N1 ${n1} <br>`)
// document.write(`N2 ${n2} <br>`)
// document.write(`N3 ${n3} <br>`)

// console.log(n1 + n2)// adição
// console.log(n1 - n2)// subtração
// console.log(n1 * n2)// multiplicação
// console.log(n1 / n2)// divisão
// console.log(n1 % n2)// restou ou modulo

// console.log(n2 == n3)// igual
// console.log(n2 === n3)// identico a
// console.log(n2 != n3)// diferente de Não =
// console.log(n2 !== n3)// não é identico

// console.log(n1 > n2) // n1 é maior Q n2
// console.log(n1 < n2) // n1 é menor Q n2
// console.log(n1 >= n2) // n1 é maior ou igual a n2
// console.log(n1 <= n2) // n1 é menor ou igual n2

// let a = true
// let b = false
// console.log(a && b)// false E AND
// console.log(a || b)// true OU QR
// console.log(!a)//  false NÃO NOT negação
// console.log(!b) // true

// FIM DO VIDEO 3


// Video 2 Sintaxe, Variáveis, Constantes, Tipos:

// document.write('Olá Mundo!');

// let mensagem = "Minha mensagem"
// let mensagem2 = "Outra mensagem"
// let meuPeso = 83.5
// let minhaAltura = 1.75
// let minhaIdade = 40
// let ehDoador = false
// let teste = null

// CRIAR CONSTANTES E ATRIBUIR VALOR
// const PI = 3.1415;
// const TAXA = 0.5;

// teste = "Algum conteúdo"

// ESCREVER O CONTEUDO DE VARIÁVEIS E CONSTANTES
//document.write("<p> Mensagem" + mensagem + "</p>")
// document.write(`Mensagem2: ${mensagem2}`);
// document.write("<p>Peso: " + meuPeso + "Kg </p>");
// document.write(`Altura: ${minhaAltura} m`);
// document.write("<p> Idade" + minhaIdade + "anos</p>");
// document.write(`Doador? ${ehDoador}`);
// document.write("<p>Teste: " + teste + "</p>");
// document.write("<p>PI " + PI + "</p>");
// document.write("<p>TAXA" + TAXA + "</P>");

// FIM VIDEO 2



// Video 1 : Introdução ao JavaScript.
document.write('Olá Mundo!'); // 1º Ex. finalizar com (; ou Não)
console.log("Outro Olá Mundo!") // 2º Ex.esta inf. está no console
// alert("Olá minha primeira msg alert");// 3º Ex. alert(MSG)
//fim Video 1

// Prof ED Maia Curso JS
