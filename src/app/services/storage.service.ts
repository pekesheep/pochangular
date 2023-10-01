import { Injectable } from '@angular/core';
import { PlayerProfile } from '../models/player-profile';
import * as localforage from 'localforage';

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  private PLAYER_PROFILES = 'player_profiles';
  private store?: LocalForage;

  constructor() {
    this.store = localforage.createInstance({
      name: 'pochangular_v1',
    });
  }

  async getPlayerProfiles(): Promise<PlayerProfile[] | null> {
    //mock
    // return [
    //   { name: 'beke', color: '#000000' },
    //   { name: 'angel', color: '#121212' },
    //   { name: 'josee', color: '#242424' },
    // ];
    return this.store?.getItem(this.PLAYER_PROFILES) ?? [];
  }

  async addPlayerProfile(newProfile: PlayerProfile) {
    //TODO: provide feedback
    this.getPlayerProfiles().then((pps) => {
      (pps ?? []).push(newProfile);
      this.store?.setItem(this.PLAYER_PROFILES, pps).then((result) => result);
    });
  }
}
