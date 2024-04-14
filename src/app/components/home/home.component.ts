import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeModule } from './home.module';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, HomeModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

}
