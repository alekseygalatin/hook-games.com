import { Component, OnInit } from '@angular/core';

enum GameType {
  mobile = "Mobile",
  pc = "PC"
}

class Game {
  constructor(name:string, genre:string, description:string, type:GameType) {
    this.name = name;
    this.genre = genre;
    this.description = description;
    this.type = type;
  }
  name:string;
  genre:string;
  description:string;
  type:GameType;

  isMobile(): boolean {
    return this.type == GameType.mobile;
  }
}

@Component({
  selector: 'games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.css']
})
export class GamesComponent implements OnInit {

  games: Array<Game> = [
    new Game("More Or Less Space", "Runner", "Description", GameType.mobile)
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
