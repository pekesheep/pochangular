import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlayerProfile } from '../models/player-profile';
import { FormsModule } from '@angular/forms';
import { StorageService } from '../services/storage.service';
import { GenericButtonComponent } from '../generic-button/generic-button.component';

type PlayerItem = { player: PlayerProfile; selected: boolean };

@Component({
  selector: 'app-add-players',
  standalone: true,
  templateUrl: './add-players.component.html',
  styleUrls: ['./add-players.component.scss'],
  imports: [CommonModule, FormsModule, GenericButtonComponent],
})
export class AddPlayersComponent implements OnInit {
  playerItems: PlayerItem[] = [];

  constructor(private storage: StorageService) {}

  ngOnInit(): void {
    this.storage.getPlayerProfiles().subscribe((profiles) => this.initPlayers(profiles ?? []));
  }

  private initPlayers(players: PlayerProfile[]) {
    this.playerItems = players
      .map((profile) => {
        return { player: profile, selected: false };
      })
      .sort((a, b) => a.player.name.localeCompare(b.player.name));
  }
}
