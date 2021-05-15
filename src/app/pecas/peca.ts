export class Peca {
    private cod: string
    private descricao: string
    private quantidadeDisponivel: number
    private quantidadeMinima: number
    private capacidadeMaxima: number

    constructor(
        cod: string,
        descricao: string,
        quantidadeDisponivel: number,
        quantidadeMinima: number,
        capacidadeMaxima: number
    ){
        this.cod = cod
        this.descricao = descricao
        this.quantidadeDisponivel = quantidadeDisponivel
        this.quantidadeMinima = quantidadeMinima
        this.capacidadeMaxima = capacidadeMaxima
    }

    
    public get getCod() : string {
        return this.cod
    }

    public get getDescricao() : string {
        return this.descricao
    }

    public get getQuantidadeDisponivel() : number {
        return this.quantidadeDisponivel
    }

    public get getQuantidadeMinima() : number {
        return this.quantidadeMinima
    }

    public get getCapacidadeMaxima() : number {
        return this.capacidadeMaxima
    }
    
    
    public set setQuantidade(quantidade : number) {
        this.quantidadeDisponivel += quantidade;
    }

    public set setCodigo(codigo : string) {
        this.cod = codigo;
    }

    public set setDescricao(descricao : string) {
        this.descricao = descricao;
    }

    public set setQuantidadeDisponivel(quantidadeDisponivel : number) {
        this.quantidadeDisponivel = quantidadeDisponivel;
    }

    public set setCapacidadeMaxima(capacidadeMaxima : number) {
        this.capacidadeMaxima = capacidadeMaxima;
    }

    public set setQuantidadeMinima(quantidadeMinima : number) {
        this.quantidadeMinima = quantidadeMinima;
    }


    public getAlert() : number{
        if(this.getQuantidadeDisponivel/this.getQuantidadeMinima < 1)
            return 2;
        else if(this.getQuantidadeDisponivel/this.getCapacidadeMaxima < 0.3)
            return 3;
        else
            return 1;

    }


    

}