/*function entrada(){
    console.log("Olá, Mundo")
}

entrada()
entrada()
entrada()
entrada()
entrada()
entrada()
entrada()
entrada()
entrada()
entrada()
entrada()
entrada()
entrada()
entrada();
 function entrada2(){
    alert("ola, mundo")
 }

 entrada2()

 function entrada3(){
    confirm("É isso mesmo?")

 }

 entrada3()*/

/*function dobro(x){
     alert("O dobro de " + x + " é " + (x * 2)) 
   
}

dobro(00000302030203020)*/

/*function dizerola (nome){
    alert("olá " + nome + " Seu Lindo")
}

dizerola("Tiago")*/

/*function soma(a , b){
    alert("O resultado da soma é igual: " + (a+b))
}

soma(6,10)

function subtração (a, b){
    alert("O resultado da subtração é igual: " + (a-b))
}

subtração(6,10)*/

function resultados (a,b){
    alert("O resultado da soma é igual: " + (a+b) +
 "\nO resultado da subtração é igual: " + (a-b) +
    "\nO resultado da divisão é igual: " + (a/b) +
    "\nO resultado da multiplicação é igual: " + (a*b))
}

/*resultados(10,6)
resultados(120,90)*/

function criarUsuario(nome, email, senha, tipo = "admin"){
    const Usuario ={
        nome : nome,
        email: email,
        senha : senha,
        tipo : tipo,

    }
    alert("Usuario: " + nome +
    "\nemail: " + email + 
    "\nsenha: "+ senha +
    "\nTipo: " + tipo)
}

//criarUsuario ("tiago", "Tiago@gmail.com", "1234")

s