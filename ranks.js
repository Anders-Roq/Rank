alert("Bem Vindo Herói, Vamos Decobrir a Qual Rank Você Pertence.")

let vitorias = prompt("Digite o numero de vitórias")
let derrotas = prompt("Digite o numero de derrotas")

function saldoVitorias(v,d){
    return (v - d)
}

function calcularRank(saldoVitorias){
    let rank = ""
    if (saldoVitorias <= 10) {
        rank = "Ferro"
      } else if (saldoVitorias >= 11 && saldoVitorias <= 20) {
        rank = "Bronze"
      } else if (saldoVitorias >= 21 && saldoVitorias <= 50) {
        rank = "Prata"
      } else if (saldoVitorias >= 51 && saldoVitorias <= 80) {
        rank = "Ouro"      
      } else if (saldoVitorias >= 81 && saldoVitorias <= 90) {
        rank = "Diamane"
      } else if (saldoVitorias >= 91 && saldoVitorias <= 100) {
        rank = "Lendáro"
      } else{
        rank = "Imortal"
      }
      return rank
}
      alert("O heroi tem saldo de: "+saldo+ " vitórias e está no nivel de: "+rank)
