export function domInjector(seletor: string){
    return function(
        target:any,
        propertyKey: string
        // não tem descripitor pq não se quer gravar sobre metodo original
    ){
        console.log(`Modificando protype ${target.constructor.name} e adicionando getter para a propriedade ${propertyKey}`)
        
        let elemento: HTMLElement;
        const getter = function(){
            if(!elemento){
                elemento = <HTMLElement>document.querySelector(seletor);
                console.log(`buscando eleemnto do DOM com o soletor ${seletor} para injetar em ${propertyKey}`);
                
            }
           return elemento;
        }

        Object.defineProperty(
            target,
            propertyKey,
            {get: getter}
        );

        // o getter busca o elemento sempre que a propriedade é acessada.
    }
}