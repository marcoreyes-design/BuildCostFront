import { Component } from '@angular/core';
import { SidebarComponent } from '../sidebar/sidebar';

@Component({
  selector: 'app-perfil',
  standalone: true,
  imports: [SidebarComponent],
  templateUrl: './perfil.html',
  styleUrl: './perfil.css',
})
export class Perfil {

}
