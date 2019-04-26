import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {
  constructor() { this.fill = 'X' || 'O'; this.turn = 'X'; }
  fill: any;
  board: any[];
  turn: any;
  lock: boolean;
  status: string;


  ngOnInit() {
    this.start();
  }

  play(casa) {
    if (casa.value === 'X' || casa.value === 'O') {
      alert('Quadrado já escolhido, escolha outro');
    } else {
      casa.value = this.fill;
      this.verify(this.turn);
    }
  }

  get lines(): any[] {
    return [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];
  }

  verify(turn) {
    // vitoria
    for (const pattern of this.lines) {
      const foundWinner = this.board[pattern[0]].value === turn
        && this.board[pattern[1]].value === turn
        && this.board[pattern[2]].value === turn;
      if (foundWinner) {
        for (const index of pattern) {
          this.board[index].winner = true;
        }
        this.lock = true;
        console.log(this.lock);
        this.status = 'VENCEDOR!';
        alert('CABO');
      }
    }

    // muda vez
    if (this.fill === 'X') {
      this.fill = 'O';
      this.turn = this.fill;
    } else {
      this.fill = 'X';
      this.turn = this.fill;
    }
    console.log(this.lock);
    return false;
  }

  start() {
    this.board = [
      { value: '' }, { value: '' }, { value: '' },
      { value: '' }, { value: '' }, { value: '' },
      { value: '' }, { value: '' }, { value: '' }
    ];
    this.status = 'É a vez de: ';
    this.lock = false;
  }

}
