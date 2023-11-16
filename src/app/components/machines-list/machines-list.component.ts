import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MachineFetchService } from '@services/machine-fetch.service';
import { Machine } from '@interfaces/machine.interface';
import { MachineComponent } from '@components/machine/machine.component';

@Component({
  selector: 'app-machines-list',
  standalone: true,
  imports: [CommonModule, MachineComponent],
  templateUrl: './machines-list.component.html',
  styleUrl: './machines-list.component.css'
})
export class MachinesListComponent {

  machines: Machine[] = [];

  constructor(private machineFetchService: MachineFetchService) {  }

  ngOnInit() {    
    this.machineFetchService.fetchMachinesData().subscribe(data => {
      this.machines = data;
    });
  }

  filterMachinesByTechnology(technology?: number) {
    this.machineFetchService.fetchMachinesData(technology).subscribe(data => {
      this.machines = data;
    });
  }

}
