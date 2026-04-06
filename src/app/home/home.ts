import { Component } from '@angular/core';
import { SidebarComponent } from '../sidebar/sidebar';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

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
// Eliminar producto del presupuesto
  eliminarProducto(index: number) {
  this.presupuesto.splice(index, 1);
}
}