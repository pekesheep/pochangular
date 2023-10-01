import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlayerProfile } from '../models/player-profile';
import { FormsModule } from '@angular/forms';
import { StorageService } from '../services/storage.service';

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

  constructor(private storage: StorageService) {}

  ngOnInit(): void {
    this.storage.getPlayerProfiles().then((pps) => this.initPlayers(pps ?? []));
  }

  private initPlayers(players: PlayerProfile[]) {
    this.playerItems = players
      .map((p) => {
        return { player: p, selected: false };
      })
      .sort((a, b) => a.player.name.localeCompare(b.player.name));
  }
}
