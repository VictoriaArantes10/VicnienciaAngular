import { Injectable } from '@angular/core';
import { produtoVenda } from '../models/produtoVenda';

@Injectable({
  providedIn: 'root'
})
export class produtoVendaService {

  constructor() { }
  produtoVendas: produtoVenda[] = [];
  count: number = 1;

  public inserir(produtoVenda: produtoVenda): void {

    produtoVenda.id = this.count;

    this.produtoVendas.push(produtoVenda);
    this.count = this.count + 1;
  }
  public obterTodos(): produtoVenda[] {

    return this.produtoVendas;
  }

  
  public remover(id: number): boolean {

    var ind: number = -1;
    for (let i = 0; i <= this.produtoVendas.length; i++) {
      if (this.produtoVendas[i].id == id) {
        ind = i;
        break;
      }
    }
    this.produtoVendas.splice(ind, 1);
    console.log(this.produtoVendas);
    return true;
  }

 
  public alterar(produtoVenda: produtoVenda): produtoVenda {
    var ind: number = -1;
    for (let i = 0; i <= this.produtoVendas.length; i++) {
      if (this.produtoVendas[i].id == produtoVenda.id) {
        ind = i;
        break;
      }
    }
    this.produtoVendas[ind] = produtoVenda;
    return produtoVenda;
  }

  public obterPorId(id: number): produtoVenda {

    var ind: number = -1;
    for (let i = 0; i <= this.produtoVendas.length; i++) {
      if (this.produtoVendas[i].id == id) {
        ind = i;
        break;
      }
    }
    return this.produtoVendas[ind];
  }


}
