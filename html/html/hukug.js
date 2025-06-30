const livros = ["suspense", "fantasia", "romance"]
console.log(livros)



function inserirFinalArray(){
    var novoLivro = prompt("digite uma nova classificação: ")
    livros.push(novoLivro)
    console.log(livros)
}
