import { Component } from '@angular/core';
import { SidebarComponent } from '../sidebar/sidebar';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import jsPDF from 'jspdf';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [SidebarComponent, CommonModule, FormsModule],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {

  mostrarPresupuesto = false;
  presupuesto: any[] = [];
  i: number = 0;

  togglePresupuesto() {
    this.mostrarPresupuesto = !this.mostrarPresupuesto;
  }
  agregarProducto(nombre: string, precio: number) {
    const productoExistente = this.presupuesto.find(p => p.nombre === nombre);
    if (productoExistente) {
      productoExistente.cantidad += 1;
    } 
    else {
      this.presupuesto.push({
        nombre: nombre,
        precio: precio,
        cantidad: 1
      });
    }
    console.log(this.presupuesto);
    }

  // total
  getTotal() {
    return this.presupuesto.reduce((total, item) => {
      return total + (item.precio * item.cantidad);
    }, 0);
  }
  // Catidad de productos
  aumentar(item: any) {
  item.cantidad++;
  }

disminuir(item: any) {
  if (item.cantidad > 1) {
    item.cantidad--;
  }
}

//----------------------------------------------------------
generarPdf() {
  if (this.presupuesto.length === 0) {
    alert('No hay productos');
    return;
  }

  const doc = new jsPDF();

  let y = 10;

  doc.setFontSize(18);
  doc.text('Presupuesto BuildCost', 10, y);

  y += 10;
  doc.setFontSize(12);

  this.presupuesto.forEach((item, index) => {
    doc.text(
      `${index + 1}. ${item.nombre} - $${item.precio} x ${item.cantidad} = $${item.precio * item.cantidad}`,
      10,
      y
    );
    y += 8;
  });

  y += 10;

  doc.setFontSize(14);
  doc.text(`Total: $${this.getTotal()}`, 10, y);

  // 🔥 Generar archivo en memoria
  const blob = doc.output('blob');
  const url = URL.createObjectURL(blob);

  // Guardar en localStorage
  const nuevoPdf = {
    id: Date.now(),
    nombre: 'Presupuesto',
    fecha: new Date().toLocaleDateString(),
    url: url
  };

  const pdfs = JSON.parse(localStorage.getItem('pdfs') || '[]');
  pdfs.push(nuevoPdf);
  localStorage.setItem('pdfs', JSON.stringify(pdfs));

  // 🔥 Descargar automáticamente
  doc.save('presupuesto.pdf');
}
// Eliminar producto del presupuesto
  eliminarProducto(index: number) {
  this.presupuesto.splice(index, 1);
}
}