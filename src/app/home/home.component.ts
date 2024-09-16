import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { GenericButtonComponent } from '../generic-button/generic-button.component';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  imports: [CommonModule, RouterModule, GenericButtonComponent],
})
export class HomeComponent {
  gameExists = false;
}
