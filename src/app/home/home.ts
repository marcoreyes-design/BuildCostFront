import { Component } from '@angular/core';
import { SidebarComponent } from '../sidebar/sidebar';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [SidebarComponent],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {

  generarPdf() {

    // 🔹 Aquí iría tu lógica real de generación de PDF
    // (por ejemplo jsPDF)

    const url = 'assets/pdfs/presupuesto-demo.pdf'; 
    // Esto es solo ejemplo

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