var frmModelo;
var frmPreco;

var divMostrar;
//Botao cadastrar add evento
btnCadastrar.addEventListener('click', function(){
    frmModelo = modelo.value //document.getElementById('nome').
    frmPreco = preco.value  

    divMostrar = document.getElementById('mostrarCadastro')
    alert('Cadastrado com sucesso')
    let number = Number(frmPreco)
    console.log(number);
    let vEntrada= number / 2;
    let vParcela = vEntrada / 60
    var vFinal = vParcela * 0.7 + vParcela  ;


   
    divMostrar.innerHTML = `
        <div>Modelo: <strong>${frmModelo}</strong></div>
        <div>Preço R$: <strong>${frmPreco}</strong></div>
        <div>Entrada R$: <strong>${vEntrada}</strong></div>
        <div>Saldo em 60x de: <strong>${vFinal}</strong></div>
  
  
    `
    
})

modelo.addEventListener('keyup', function(){
    frmModelo = modelo.value //document.getElementById('nome').
    frmPreco = preco.value  
  
    divMostrar = document.getElementById('mostrarCadastro')
   
    divMostrar.innerHTML = `
        <div>Modelo: <strong>${frmModelo}</strong></div>
        <div>Preço R$: <strong>${frmPreco}</strong></div>
        <div>Entrada R$: <strong>${vEntrada}</strong></div>
        <div>Saldo em 60x de: <strong>${vFinal}</strong></div>
  


    `
})

function moeda(a, e, r, t) {
    let n = ""
      , h = j = 0
      , u = tamanho2 = 0
      , l = ajd2 = ""
      , o = window.Event ? t.which : t.keyCode;
    if (13 == o || 8 == o)
        return !0;
    if (n = String.fromCharCode(o),
    -1 == "0123456789".indexOf(n))
        return !1;
    for (u = a.value.length,
    h = 0; h < u && ("0" == a.value.charAt(h) || a.value.charAt(h) == r); h++)
        ;
    for (l = ""; h < u; h++)
        -1 != "0123456789".indexOf(a.value.charAt(h)) && (l += a.value.charAt(h));
    if (l += n,
    0 == (u = l.length) && (a.value = ""),
    1 == u && (a.value = "0" + r + "0" + l),
    2 == u && (a.value = "0" + r + l),
    u > 2) {
        for (ajd2 = "",
        j = 0,
        h = u - 3; h >= 0; h--)
            3 == j && (ajd2 += e,
            j = 0),
            ajd2 += l.charAt(h),
            j++;
        for (a.value = "",
        tamanho2 = ajd2.length,
        h = tamanho2 - 1; h >= 0; h--)
            a.value += ajd2.charAt(h);
        a.value += r + l.substr(u - 2, u)
    }
    return !1
}
