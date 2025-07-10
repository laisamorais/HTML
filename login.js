let nome= prompt("digite seu nome: ")
let senha= Number(prompt("digite sua senha: "))
 
 while(senha != "1234" && nome!="laisa"){
     alert("senha errada")
     
     nome= prompt("escreva o seu nome: ")
     senha=Number(prompt("escreva a sua semha: "))
    console.log(senha)
}
alert("bem vindo!" + (nome))
