import { Component } from '@angular/core';
import { SidebarComponent } from '../sidebar/sidebar';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [SidebarComponent, CommonModule],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {
  mostrarPresupuesto = false;
togglePresupuesto() {
  this.mostrarPresupuesto = !this.mostrarPresupuesto;
}
  generarPdf() {
    const url = 'assets/pdfs/presupuesto-demo.pdf'; 
    const nuevoPdf = {
      id: Date.now(),
      nombre: 'Presupuesto Casa 1',
      fecha: new Date().toLocaleDateString(),
      url: url
    };
    const pdfs = JSON.parse(localStorage.getItem('pdfs') || '[]');
    pdfs.push(nuevoPdf);
    localStorage.setItem('pdfs', JSON.stringify(pdfs));
    alert('PDF guardado correctamente');
  }
}