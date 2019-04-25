import { Component, OnInit, Input } from '@angular/core';
import { identifierModuleUrl } from '@angular/compiler';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {
  constructor() { this.letra = 'X' || 'O'; }
  letra: any;
  board: any[];
  vez: 'X';

  ngOnInit() {
    this.start();
  }

  mostraO() {
    document.getElementById('mostra').innerHTML = 'O';
  }

  mostraX() {
    document.getElementById('mostra').innerHTML = 'X';
  }

  play(casa) {
    if (casa.value === 'X' || casa.value === 'O') {
      alert('Quadrado já escolhido, escolha outro');
    } else {
      casa.value = this.letra;
      console.log(casa.value);
      if (this.letra === 'X') {
        this.letra = 'O';
        this.mostraO();
      } else {
        this.letra = 'X';
        this.mostraX();
      }
    }
  }

  start() {
    this.board = [
      { value: '' }, { value: '' }, { value: '' },
      { value: '' }, { value: '' }, { value: '' },
      { value: '' }, { value: '' }, { value: '' }
    ];
  }

}
