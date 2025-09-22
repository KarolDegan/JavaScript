export function logarTempoDeExecucao(emSegundos: boolean = false){
    return function(
        target: any, // desabilitando o target
        propertyKey: string, //obter o nome do método que está sendo decorado
        descriptor: PropertyDescriptor,
    ){
        const metodoOriginal = descriptor.value;
        // garante que eu consiga chamar a função original mais tarme, mesmo depois de altera-la
         
        descriptor.value = function(...args: Array<any>){ // permite que a função receba numero varivel de parametros
            let divisor = 1;
            let unidade = 'milisegundos';
            if(emSegundos){
                divisor = 1000;
                unidade = 'segundo';
            }
            const t1 = performance.now();
            const retorno = metodoOriginal.apply(this, args);
            const t2 = performance.now();
            console.log(`${propertyKey}, tempo de execução: ${(t2-t1)/divisor} ${unidade}`);
            retorno // retorna o retorno do metodo original
        }

        return descriptor;
    }
}