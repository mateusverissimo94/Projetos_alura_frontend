function media() {
    const nome = document.getElementById("nome").value;

    const av1 = parseFloat(document.getElementById("nota1").value)
    const av2 = parseFloat(document.getElementById("nota2").value)

    const notaFinal = (av1 + av2) / 2

    const notaAjustada = notaFinal.toFixed(1)

    if (notaAjustada >= 7) {
        document.querySelector('#media').innerHTML = `${nome} sua nota é ${notaAjustada}: Aprovado :´)`
    } else if (notaAjustada >= 4 && notaAjustada < 7) {
        document.querySelector('#media').innerHTML = `${nome} sua nota é ${notaAjustada}: Recuparação (*3*)`
    } else {
        document.querySelector('#media').innerHTML = `${nome} sua nota é ${notaAjustada}: Reprovado T_T`
    }
}

function conversor() {
    const celsius = parseFloat(document.getElementById("celsius").value)

    const converter = (celsius * 1.8) + 32

    const ajustar = converter.toFixed(1)

    document.querySelector('#conversor').innerHTML = `${celsius}°C equivale a ${ajustar}°F`
}