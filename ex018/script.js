function gerar() {
    var n = document.getElementById('nu')
    var tab = document.getElementById('tab')
    if(n.value.length == 0){
        window.alert('Por favor digite um número!')
    } else {
        var n = Number(n.value)
        var c = 1
        // var r = '' desnecessário
        tab.innerHTML= ''//limpando a área
        do {
           let item = document.createElement('option')
            //r= c*n desnecessário
            item.text += `${n} x ${c} = ${n*c}`
            tab.appendChild(item)
            c++
        } while (c<=10)
    }
}