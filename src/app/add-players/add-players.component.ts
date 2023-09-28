import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-add-players',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './add-players.component.html',
  styleUrls: ['./add-players.component.scss'],
})
export class AddPlayersComponent {
  /**
   * List of players in the current game.
   */
  public playerList: string[] = [
    'jugador 1',
    'jugador 2',
    'jugador 3',
    'jugador 4',
  ];

  /**
   * List of all the players.
   */
  public totalPlayerRegister: string[] = [
    'jugador 5',
    'jugador 6',
    'jugador 7',
    'jugador 8',
  ];

  public addPlayer(player: string): void {
    this.playerList.push(player);
    this.totalPlayerRegister.splice(
      this.totalPlayerRegister.indexOf(player),
      1,
    );
  }

  public removePlayer(player: string): void {
    this.totalPlayerRegister.push(player);
    this.playerList.splice(this.playerList.indexOf(player), 1);
  }
}
