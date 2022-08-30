document
  .getElementById("btn-calcular")
  .addEventListener("click", function () {

    const cantidadComprados = parseInt(document.getElementById("cantidadComputadoresForm").value);
    const valorComputador = 820000;
    let descuento = 0;
    let texto = "No hay descuento para esta compra";
    const valorComprados = Math.floor(valorComputador * cantidadComprados);
    let valorFinal = valorComprados;

    if(valorComprados >= 1640000 && valorComprados <= 3280000) descuento = 0.15;
    else if(valorComprados >= 3280000 && valorComprados <= 6560000) descuento = 0.25;
    else if(valorComprados >= 6560000 && valorComprados <= 9840000) descuento = 0.35;

    
    if(descuento != 0){
      valorFinal = Math.floor(valorComprados * descuento);
      texto = `Su descuento fue del ${descuento}%`;
    }

    document.getElementById("valorCompra").value = valorComprados;
    document.getElementById("valorDescuento").value = descuento;
    document.getElementById("total").value = valorFinal;
    document.getElementById("valorDescuentoFinal").innerHTML = texto;

  });