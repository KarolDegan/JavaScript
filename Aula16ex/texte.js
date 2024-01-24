var v = [1,2,3,4] 
function inLista(x, l){
    if(l.indexOf(x) != -1){
        return true
    } else {
        return false
    }
}
//let r = inLista(num, v)
console.log(inLista(7,v))