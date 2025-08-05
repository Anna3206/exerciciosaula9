let valortotal=prompt('Qual o valor total da compra:')
let parcelas= prompt("Qual o valor total de parcelas")

if (parcelas==1){
    alert(`valor das parcelas é ${valortotal/parcelas}`)
}
else if(parcelas==2){
    alert(`valor da parcela igual a ${(valortotal*1.03)/parcelas}`)
}
else if(parcelas==4){
    alert(`valor da parcela é ${(valortotal*1.07)/parcelas}`)
}
else{
    alert(`parcela invalida`)
}
