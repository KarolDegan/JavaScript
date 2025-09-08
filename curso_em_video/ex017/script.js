function contar(){
    var i = document.getElementById('ini')
    var f = document.getElementById('fim')
    var p = document.getElementById('passo')
    var res = document.getElementById('res')
    if (i.value.length == 0 || f.value.length == 0 || p.value.length==0) {
        window.alert('[ERRO] Faltam dados!')
        res.innerHTML = 'Impossível Contar'
    } else {
        res.innerHTML = 'Contando...<br>'
        var i = Number(i.value)
        var f = Number(f.value)
         var p = Number(p.value)
        if(p==0){
        window.alert('Passo Invalido, considerando PASSO = 1')
        var p = 1
        }
        if ((i<f && p<0) || (i<f && p> f-i) || (i>f && p>0)){
            res.innerHTML = 'Erro de lógica'
        }
    }
    if(i<f){
        while (i<=f){
            res.innerHTML += ` ${i} \u{1F449}`
            var i = i + p
        }
    } else {
        while (i>=f){
            res.innerHTML += ` ${i} \u{1F449}`
            var i = i + p
        }
    }
    res.innerHTML += `\u{1F3C1}`
}