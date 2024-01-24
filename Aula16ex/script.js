var num = document.getElementById('numero')
var g = document.getElementById('ana')
var res = document.getElementById('res')
var v = []

function add(){
    if(num.value.length == 0 || Number(num.value)<1 || Number(num.value)>100){
        window.alert('[ERRO], confira os dados!')

    } else{
        if(v.indexOf(Number(num.value)) != -1){ // Deu certo PORRA!!
            window.alert(`valor ${num.value} já adicionado`)
        
        } else{
        v.push(Number(num.value)) // Ainda não entendi direito a lógica dessa 
        var g = document.createElement('option')
        g.text= `Valor ${num.value} adicionado`
        ana.appendChild(g)
        res.innerHTML=''
        }
    num.value = ''
    num.focus() // coloca o cursor nesse lugar
    }
}

function finalizar(){
    if(v.length == 0){
       window.alert('[ERRO], confira os dados!') 

    }else{
       v.sort()
       var c = 0
       var r = 0
       while (c < Number(v.length)){ 
            r = r+ v[c]
            c++
        }
        res.innerHTML = `<p> Há ${v.length} números cadastrados</p>`
        res.innerHTML += `<p>O maior valor informado foi ${v[v.length -1]}</p>`
        res.innerHTML += `<p>O menor valor informado foi ${v[0]}</p>`
        res.innerHTML += `<p>Somando todos os valores temos ${r}</p>`
        res.innerHTML += `<p>A média dos valores digitados é ${r/v.length}</p>`
    }
}