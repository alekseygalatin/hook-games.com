import { Component, OnInit } from '@angular/core';
import { faStar, faStarHalf } from '@fortawesome/free-solid-svg-icons';
import { faAndroid } from '@fortawesome/free-brands-svg-icons';

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
  selector: 'game',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.css']
})
export class GamesComponent implements OnInit {

  games: Array<Game> = [
    new Game("More or Less Space", "Runner", 
    "The crew of the legendary spaceship \"Numby\" in search of rare gems found themselves in the anomaly zone full of dangers. Help the spaceship survive and not get lost in the vastness of space.\n" +
    "Control the spaceship flying in cosmic infinity. Dodge dangerous asteroids, get out of the anomalies, collect beautiful gems, and go to the farthest places in the universe.", 
    GameType.mobile)
  ];

  faAndroid = faAndroid;
  faStar = faStar;
  faStarHalf = faStarHalf;

  constructor() { }

  ngOnInit(): void {
  }

}
