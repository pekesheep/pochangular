import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlayerProfile } from '../models/player-profile';
import { FormsModule } from '@angular/forms';

type PlayerItem = { player: PlayerProfile; selected: boolean };

@Component({
  selector: 'app-add-players',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './add-players.component.html',
  styleUrls: ['./add-players.component.scss'],
})
export class AddPlayersComponent implements OnInit {
  playerItems: PlayerItem[] = [];

  players: PlayerProfile[] = [
    { name: 'beke', color: '#000000' },
    { name: 'angel', color: '#121212' },
    { name: 'beke', color: '#000000' },
    { name: 'angel', color: '#121212' },
    { name: 'beke', color: '#000000' },
    { name: 'angel', color: '#121212' },
    { name: 'beke', color: '#000000' },
    { name: 'angel', color: '#121212' },
    { name: 'beke', color: '#000000' },
    { name: 'angel', color: '#121212' },
  ];

  ngOnInit(): void {
    this.playerItems = this.players
      .map((p) => {
        return { player: p, selected: false };
      })
      .sort((a, b) => a.player.name.localeCompare(b.player.name));
  }
}
