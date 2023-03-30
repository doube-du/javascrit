/* Um método abstrato é um metodo que não pode ser implementado, apenas herdado */
export abstract class View<T>{
    protected elemento: HTMLElement;
    private escapar = false;

    constructor(seletor: string, escapar?: boolean) {
        const elemento = document.querySelector(seletor);
        if(elemento){
            this.elemento = elemento as HTMLElement;
        }else{
            throw Error(`Seletor ${seletor} não existe`);
        }
        // Um jeito melhor é atribuir um valor padrão para a variabel na função
        // Ficaria constructor(seletor, escapar = false) 
        // Dessa forma, eu não necessitaria enviar o escapar
        if(escapar){
            this.escapar = escapar
        }
    }

    public update(model: T) : void {
        let template = this.template(model);
        if(this.escapar){
            template = template.replace(/<script>[\s\S]*?<\/script>/,'');
        }
        this.elemento.innerHTML = template;
    }

    protected abstract template(model: T) : string; 
}