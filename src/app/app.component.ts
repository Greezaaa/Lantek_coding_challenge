import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '@layout/header/header.component';
import { FooterComponent } from '@layout/footer/footer.component';
import { MachinesListComponent } from '@components/machines-list/machines-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    HeaderComponent,
    FooterComponent,
    MachinesListComponent,
  ],
  templateUrl: './app.component.html',
})

export class AppComponent {
  pageTitle = 'Lantek Coding Challenge';
}
