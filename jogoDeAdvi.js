let name = prompt("salve mano , digite seu nome ?")
alert(`Então ${name}, esse é um jogo de adivinhção valendo uma coca litro`)
let number = prompt(`${name} advinhe o numero que estou pensando de 0 até dez `) 
number = Number(number)
let numeroAleatorio = Math.round(Math.random()*10)
let resultado = number == numeroAleatorio
if (resultado)
{
    alert(`${name} do céu , não sei como vc acertou kk era o numero ${numeroAleatorio} mesmo , vamo marcar um dia ai pra coca kkkk`)

}

else {alert(`errou era ${numeroAleatorio} , agora vc me deve uma coca , vamos marcar um dia pra mim ir buscar, atualiza ai a pagina pra tentar de novo`)}
