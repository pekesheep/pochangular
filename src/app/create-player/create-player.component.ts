import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-create-player',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './create-player.component.html',
  styleUrls: ['./create-player.component.scss']
})
export class CreatePlayerComponent {

  public myColor(): void {

    (<any>document.getElementById('box')).value = (<HTMLInputElement>document.getElementById('colorPicker')).value;
}

}
