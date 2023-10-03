import { Injectable } from '@angular/core';
import { PlayerProfile } from '../models/player-profile';
import * as localforage from 'localforage';
import { Observable, from, switchMap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  private PLAYER_PROFILES = 'player_profiles';
  private store: LocalForage;

  constructor() {
    this.store = localforage.createInstance({
      name: 'pochangular_v1',
    });
  }

  getPlayerProfiles(): Observable<PlayerProfile[] | null> {
    //mock
    // return [
    //   { name: 'beke', color: '#000000' },
    //   { name: 'angel', color: '#121212' },
    //   { name: 'josee', color: '#242424' },
    // ];
    return from(this.store.getItem<PlayerProfile[]>(this.PLAYER_PROFILES));
  }

  addPlayerProfile(newProfile: PlayerProfile): Observable<PlayerProfile[] | null> {
    return this.getPlayerProfiles().pipe(
      switchMap((storeProfiles) => {
        const profiles = storeProfiles ?? [];
        profiles.push(newProfile);
        return from(this.store.setItem<PlayerProfile[]>(this.PLAYER_PROFILES, profiles));
      })
    );
  }
}
