export abstract class View<T>{ // T : tipo genérico, precisa ser expecificado nas filhas
    protected elemento: HTMLElement;

    constructor(seletor: string){
        this.elemento = document.querySelector(seletor);
    }

    update(model: T): void{
        this.elemento.innerHTML = this.template(model);
    }

    abstract template(model: T): string;
}