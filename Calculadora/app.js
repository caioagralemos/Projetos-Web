btnZero = document.querySelector("#zero")
numbers = document.querySelectorAll(".number")
result = document.querySelector("#result")
clear = document.querySelector("#clear")
sum = document.querySelector("#sum")
sub = document.querySelector("#subtract")
mul = document.querySelector("#multiply")
div = document.querySelector("#divide")
equal = document.querySelector("#equal")

function resultado(num) {
    if (result.innerText == 0) {
        result.innerText = String(num)
    }
    else {
        result.innerText = result.innerText + String(num)
    }
}

for (let num of numbers) {
    num.addEventListener("click", () => {
        resultado(num.innerText)
    })
}

clear.addEventListener("click", () => {
    result.innerText = "0"
})

btnZero.addEventListener("click", () => {
    if (result.innerText == 0) {
        pass
    }
    else {
        result.innerText = result.innerText + "0"
    }
})

sum.addEventListener("click", () => {
    num1 = Number(result.innerText)
    result.innerText = "0"
    op = "sum"
})

sub.addEventListener("click", () => {
    num1 = Number(result.innerText)
    result.innerText = "0"
    op = "sub"
})

mul.addEventListener("click", () => {
    num1 = Number(result.innerText)
    result.innerText = "0"
    op = "mul"
})

div.addEventListener("click", () => {
    num1 = Number(result.innerText)
    result.innerText = "0"
    op = "div"
})

// Neste código atualizado, a função equals é removida completamente, e a variável op é definida dentro dos ouvintes de eventos para os botões de operação aritmética. Em seguida, há um único ouvinte de evento para o botão "igual", que recupera num1 e num2 e executa a operação aritmética apropriada com base no valor de op. Isso garante que todas as operações aritméticas sejam levadas em conta ao calcular o resultado final.

equal.addEventListener("click", () => {
    num2 = Number(result.innerText)
    if (op == "sum") {
        result.innerText = Number(num1) + Number(num2)
        num1 = 0
        num2 = 0
    }
    else if (op == "sub") {
        result.innerText = Number(num1) - Number(num2)
        num1 = 0
        num2 = 0
    }
    else if (op == "mul") {
        result.innerText = Number(num1) * Number(num2)
        num1 = 0
        num2 = 0
    }
    else if (op == "div") {
        result.innerText = Number(num1) / Number(num2)
        num1 = 0
        num2 = 0
    }
})
