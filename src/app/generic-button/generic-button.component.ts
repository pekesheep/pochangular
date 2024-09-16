import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-generic-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './generic-button.component.html',
  styleUrls: ['./generic-button.component.scss'],
})
export class GenericButtonComponent {
  @Input() buttonText: string | undefined;
  @Output() buttonClick = new EventEmitter<void>();

  onClick() {
    this.buttonClick.emit();
  }
}
