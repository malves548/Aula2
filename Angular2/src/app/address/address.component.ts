import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css']
})
export class AddressComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() location

  @Input() nome

  @Output() respostaEvento = new EventEmitter()

  display() {
    let form = document.querySelector('#formAddress' + this.Name)
    form.classList.toggle('visible')
    console.log('trocou')
  }

  atualizar(address, city, country) { }

  feedback() {
    let atualizacao = 5
    console.log('Resposta para o pai',
      this.respostaEvento.emit(atualizacao))
  }

}
