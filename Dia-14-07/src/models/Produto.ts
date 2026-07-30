export class Produto {
    constructor(public id: number, public nome: string, public preco: number, public quantide: number){}
}

export let produtos: Produto[] = []