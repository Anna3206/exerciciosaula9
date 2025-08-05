let num=parseInt(prompt('Digite um número inteiro:'))
let num2=parseInt(prompt('Digite outro número inteiro:'))

if(num>num2){
    alert(`O ${num} é maior que o ${num2}`)
}
else if (num2>num){
    alert(`O ${num2} é maior que o ${num}`)
}
else{
    alert(`Os numeros sao iguais`)
}