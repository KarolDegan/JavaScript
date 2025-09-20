export class Negociacao {
    /*private _data: Date;
    private _quantidade: number;
    private _valor: number;

    constructor(data: Date, quantidade: number, valor: number) {
        this._data = data;
        this._quantidade = quantidade;
        this._valor = valor;
    }*/

    constructor(
        private _data: Date,
        public readonly quantidade: number,
        public readonly valor: number
    ) {}

    get data(): Date {
        const data = new Date(this._data.getTime());
        return data;
    }

    get volume(): number {
        return this.quantidade * this.valor;
    }

    public static criaDe(dataString: string, quantidadeString: string, valorString: string): Negociacao{
        const exp = /-/g; // expressão regular para trocar o - por , no input data
        const date = new Date(dataString.replace(exp, ','));

        const quantidade = parseInt(quantidadeString);

        const valor = parseFloat(valorString);

        return new Negociacao(date, quantidade, valor);
    }
}