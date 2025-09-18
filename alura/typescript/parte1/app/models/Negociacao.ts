export class Negociacao {
    private _data;
    private _quantidade;
    private _valor;

    constructor(data: Date, quantidade: number, valor: number) {
        this._data = data;
        this._quantidade = quantidade;
        this._valor = valor;
    }

    get quantidade() {
        return this._quantidade;
    }

    get data() {
        return this._data;
    }

    get valor() {
        return this._valor;
    }

    get volume() {
        return this.quantidade * this.valor;
    }
}