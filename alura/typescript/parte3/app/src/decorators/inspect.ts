export function inspect(){
    return function(
        type: any,
        propertyKey: string,
        descriptor: PropertyDescriptor
    ){
        const metodoOriginal = descriptor.value;
        descriptor.value = function(...args: Array<any>){
            const retorno = metodoOriginal.apply(this, args);
            
        }

        return descriptor
    }

    
}