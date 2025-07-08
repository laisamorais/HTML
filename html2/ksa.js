let num1 = Number(prompt("digite seu primeiro numero:  "))
let num2 = Number(prompt("digite seu segundo numero:  "))
let num3 = Number(prompt("digite seu terceiro numero:  "))
let num4 = Number(prompt("digite seu quarto numero:  "))
let num5 = Number(prompt("digite seu quinto numero:  "))

if(num1 >num2, num1> num3, num1 > num4 , num1> num5 ){
    alert("seu primeiro numero é o maior: ")

}
else if(num2> num1, num2>num3, num2> num4, num2 > num5){
    alert("seu segundo numero é maior")
}
else if(num3> num1, num3>num2, num3> num4, num3 > num5){
    alert("seu terceiro numero é maior")
}
else if(num4> num1, num4>num3, num4> num2, num4 > num5){
    alert("seu quarto numero é maior")
}
else{
    alert("seu quinto numero é maior")
}
 
alert("seus numeros são: " + num1 + num2 + num3 + num4 + num5)