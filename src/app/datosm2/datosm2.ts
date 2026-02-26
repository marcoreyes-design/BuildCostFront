import { Component } from '@angular/core';
import { SidebarComponent } from '../sidebar/sidebar';
import { CommonModule } from '@angular/common'; // 👈 IMPORTANTE para usar *ngIf

@Component({
  selector: 'app-datosm2',
  standalone: true,
  imports: [SidebarComponent, CommonModule], // 👈 agrega CommonModule
  templateUrl: './datosm2.html',
  styleUrl: './datosm2.css',
})
export class Datosm2 {

  mostrarModal: boolean = false;

  abrirModal() {
    this.mostrarModal = true;
  }

  cerrarModal() {
    this.mostrarModal = false;
  }

}