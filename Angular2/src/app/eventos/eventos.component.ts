import { Component, OnInit, Input, Output } from '@angular/core';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.css']
})
export class EventosComponent implements OnInit {

  constructor() { }

  ngOnInit(): void { }

  atualizaEndereco(respostaEvento) {
    console.log('Foi emitido o eventos e chegou no pai >> ', respostaEvento)
  }

  evento = {
    name = "Samba Prime",
    date: '6/10/2020',
    time: '8am',
    location: { address: 'Expominas', city: 'Belo Horizonte', country: 'Brasil' },
    onlineUrl: 'http://www.sambaprime.com.br'
  }]

}
