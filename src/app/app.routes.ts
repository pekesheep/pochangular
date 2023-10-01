import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AddPlayersComponent } from './add-players/add-players.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'setup', component: AddPlayersComponent },
];
