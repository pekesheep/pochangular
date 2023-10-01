import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlayerProfile } from '../models/player-profile';

@Component({
  selector: 'app-stats',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.scss'],
})
export class StatsComponent implements OnInit {
  ngOnInit(): void {
    this.sortByGames();
  }
  public buttonInfo = 'Games';
  public sortingValue = 'games';
  public peke: PlayerProfile = {
    name: 'peke',
    color: '#883322',
    games: 100,
    wins: 30,
    highScore: 110,
    winRate: 30,
  };
  public ahdalar: PlayerProfile = {
    name: 'Ahdalar',
    color: '#116688',
    games: 200,
    wins: 100,
    highScore: 165,
    winRate: 50,
  };
  public iggel: PlayerProfile = {
    name: 'Iggel',
    color: '#110088',
    games: 150,
    wins: 10,
    highScore: 105,
    winRate: 80,
  };

  public playerRanking = [this.peke, this.ahdalar, this.iggel];

  sortByGames() {
    this.playerRanking.sort((a, b) => b.games - a.games);
    this.sortingValue = 'games';
    this.buttonInfo = 'Games';
  }

  sortByWinRate() {
    this.playerRanking.sort((a, b) => b.winRate - a.winRate);
    this.sortingValue = 'winRate';
    this.buttonInfo = 'WinRate';
  }

  sortByHighScore() {
    this.playerRanking.sort((a, b) => b.highScore - a.highScore);
    this.sortingValue = 'highScore';
    this.buttonInfo = 'Highscore';
  }

  getPlayerSortingValue(player: PlayerProfile): number {
    switch (this.sortingValue) {
      case 'games':
        return player.games;
      case 'winRate':
        return player.winRate;
      case 'highScore':
        return player.highScore;
      default:
        return 0;
    }
  }
}
