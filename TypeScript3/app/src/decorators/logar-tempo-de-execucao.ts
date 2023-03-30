export function logarTempoDeExecucao(emSegundos: boolean = false){
    return function(
        target: any, // Construtor da Classe
        propertyKey: string,
        descriptor: PropertyDescriptor
    ){
        const metodoOriginal = descriptor.value;
        descriptor.value        = function(...args: any[]){
            let divisor         = 1;
            let unidade         = 'milisegundos';
            if(emSegundos){
                let divisor         = 1000;
                let unidade         = 'segundos';
            }
            const t0            = performance.now();
            const retorno       = metodoOriginal.apply(this, args);
            const tfinal        = performance.now();
            console.log(`${propertyKey}, tempo de Execução: ${(tfinal-t0)/divisor} ${unidade}`);
            retorno;
        };
        return descriptor;
    }
}