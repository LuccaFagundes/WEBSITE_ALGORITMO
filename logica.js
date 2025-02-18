// Variavel que armazena o saldo inicial da conta 
let saldo = 0

// Função para atualizar o saldo da tela
function atualizarSaldo() {
    // Selecionar o elemento do saldo e atualizar o texto com o valor formatado
    document.getElementById('saldo').textContent = saldo.toFixed(2)
}
// Função que realiza o depósito

function depositar() {
    // Obtem o valor digitado pelo usuário 
    valor = parseFloat(document.getElementById('valor').value)
    // Verifica se o valor é valido (maior que 0 e numerico)
    if (isNaN(valor) || valor <= 0) {
        // Exibe alerta se o valor for inválido 
        alert("Por favor deposito alguma coisa :).")
        return // Interrompe a execução da função 
    }
    // Adiciona valor ao saldo
    saldo += valor
    // Atualizar o saldo na tela
    atualizarSaldo()

    //exibir uma mensagem confirmando o depósito
    alert("Obrigado por depositar " + valor.toFixed(2) + ".  Gostaria de mais alguma coisa >:)")
}

// Função que realiza o saque
function sacar(){
    // Obtém o valor digitado pelo usuário e converte para decimal
    valor = parseFloat(document.getElementById('valor').value)
    // Verificar se o valor é válido
    if (isNaN(valor) || valor <= 0) {
        alert("Por favor, insira um valor válido!")
        return
    }
    // Verificar se o saldo é suficiente 
    if (valor > saldo) {
        alert(`POBRE`)
        return
    }
    // Subtrai o valor do slado
    saldo -= valor
    
    // Atualizar o saldo 
    atualizarSaldo()
    alert("Saque de R$ " + valor.toFixed(2) + "  realizado com sucesso")
}

if (saldo = infinity) {
    alert("Tá sonegando imposto hein miseravi")
    saldo = 0
}





