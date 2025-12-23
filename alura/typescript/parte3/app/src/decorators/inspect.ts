//export function inspect(){ não precisa dessa função de fora se não for receber parametro
export function inspect(
        type: any,
        propertyKey: string,
        descriptor: PropertyDescriptor
    ){
        const metodoOriginal = descriptor.value;
        descriptor.value = function(...args: Array<any>){
            console.log(`---Método: ${propertyKey}`);
            console.log(`-----parêmetros: ${JSON.stringify(args)}`);
            const retorno = metodoOriginal.apply(this, args); // executa o método com o decorator
            console.log(`------retorno: ${JSON.stringify(retorno)}`);

            return retorno            
        }

        return descriptor
    }

    
