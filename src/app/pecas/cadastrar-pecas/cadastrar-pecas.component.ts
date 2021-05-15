import { Component, OnInit, setTestabilityGetter } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

import { Peca } from '../peca';
import { PecaService } from '../peca.service';

@Component({
  selector: 'app-cadastrar-pecas',
  templateUrl: './cadastrar-pecas.component.html',
  styleUrls: ['./cadastrar-pecas.component.css']
})
export class CadastrarPecasComponent implements OnInit {

  
  cod: string = ''
  descricao: string = ''
	inscricao: Subscription | undefined
	peca: Peca | undefined

  quantidadeDisponivel: number = 0
  quantidadeMinima: number = 0
  capacidadeMaxima: number = 0
  alert: number = 1

  constructor(
    private pecaService: PecaService,
    private route: ActivatedRoute,
		private router: Router
  ) {  }

  ngOnInit(): void {
   
  }

  cadastrarPeca(){
   
  }

}
