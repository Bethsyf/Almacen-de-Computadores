const valorCompra = document.getElementById("valor-compra")
const valorDesacuento = document.getElementById("valor-descuento")
const totalCompra = document.getElementById("total")

function calcular() {
    const cantidad = document.getElementById("cantidad")
    const precio = 820000
    const resultado = precio * Number(cantidad.value)
    let descuento, valorTotal
    if (resultado >= 1650000 && resultado <= 3280000) {
        descuento = resultado * 0.15
        valorTotal = resultado - descuento
        alertError.innerHTML = "Su descuento fue del 15%";

    } else if (resultado > 3280000 && resultado <= 6560000) {
        descuento = resultado * 0.25
        valorTotal = resultado - descuento
        alertError.innerHTML = "Su descuento fue del 25%";
    } else if (resultado > 6560000 && resultado <= 9840000) {
        descuento = resultado * 0.35
        valorTotal = resultado - descuento
        alertError.innerHTML = "Su descuento fue del 35%";
    } else {
        descuento = 0
        valorTotal = resultado
        alertError.innerHTML = "No hay descuento para esta compra";
    }
    valorCompra.value = resultado
    valorDesacuento.value = descuento
    totalCompra.value = valorTotal
}