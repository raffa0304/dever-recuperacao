import { Injectable } from '@angular/core';
import { Peca } from './peca';

@Injectable({
  providedIn: 'root'
})
export class PecaService {

  private pecas: Peca[]

  constructor() {

    this.pecas = [      
      new Peca("Cadastrar", " ", 0, 0, 0),
      new Peca("4585", "Peça 12", 12, 50, 200),
      new Peca("8454", "Peça 77", 20, 10, 80),
      new Peca("1312", "Peça 79", 13, 5, 20),
      new Peca("9658", "Peça 66", 50, 10, 50),
      new Peca("1348", "Peça 31", 80, 20, 100),
      new Peca("4574", "Peça 75", 16, 5, 45),
      new Peca("6524", "Peça 3", 23, 25, 50),
      new Peca("0568", "Peça 1", 56, 60, 110)
    ]
  }

  
  public get getPecas() : Peca[] {
    this.ordenar(this.pecas)
    return this.pecas
  }

  public getPeca(cod: string){
    for(let peca of this.pecas){
      if(peca.getCod == cod){
        return peca
      }
    }
    return undefined
  }

  
  public atualizaQuantidadePeca(cod: string, quantidade : number) {
    for(let peca of this.pecas){
      if(peca.getCod == cod){
        peca.setQuantidade = quantidade
      }
    }
  }

  public cadastrarPeca(cod: string, descricao: string, quantidadeDisponivel : number, quantidadeMinima : number, capacidadeMaxima : number) {
    
  }

  private ordenar(arr: Peca[]){
    arr.sort((a, b) => (
      a.getQuantidadeDisponivel/a.getQuantidadeMinima < 
      b.getQuantidadeDisponivel/b.getQuantidadeMinima) ? -1 : 1);
  }
  
  
}
