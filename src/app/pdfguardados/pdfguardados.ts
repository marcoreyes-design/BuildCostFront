import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from '../sidebar/sidebar';

interface PdfItem {
  id: number;
  nombre: string;
  fecha: string;
  url: string;
}

@Component({
  selector: 'app-pdfguardados',
  standalone: true,
  imports: [CommonModule, SidebarComponent],
  templateUrl: './pdfguardados.html',
  styleUrl: './pdfguardados.css'
})
export class Pdfguardados implements OnInit {

  pdfs: PdfItem[] = [];

  ngOnInit() {
    this.cargarPdfs();
  }

  cargarPdfs() {
    const data = localStorage.getItem('pdfs');
    this.pdfs = data ? JSON.parse(data) : [];
  }

  eliminarPdf(id: number) {
    this.pdfs = this.pdfs.filter(p => p.id !== id);
    localStorage.setItem('pdfs', JSON.stringify(this.pdfs));
  }

  descargarPdf(url: string) {
    window.open(url, '_blank');
  }
}