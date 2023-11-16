import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Machine } from '@interfaces/machine.interface';

@Component({
  selector: 'app-machine',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './machine.component.html',
  styleUrl: './machine.component.css'
})
export class MachineComponent {
  @Input() machine: Machine | undefined;
}
