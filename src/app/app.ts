import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [CommonModule, FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  name = '';
  zone = '';
  service = '';
  urgency = '';
  propertyType = '';
  message = '';

  readonly urgencyOptions = ['Urgente hoy', 'Esta semana', 'Sin apuro'];
  readonly propertyOptions = ['Casa', 'Departamento', 'Comercio', 'Industria'];

  get whatsappUrl(): string {
    const phone = '542617703366';
    const lines = [
      'Hola Julian, necesito un presupuesto.',
      this.name ? `Nombre: ${this.name}` : '',
      this.zone ? `Zona: ${this.zone}` : '',
      this.service ? `Servicio: ${this.service}` : '',
      this.urgency ? `Urgencia: ${this.urgency}` : '',
      this.propertyType ? `Tipo de propiedad: ${this.propertyType}` : '',
      this.message ? `Problema: ${this.message}` : ''
    ].filter(Boolean);
    const text = encodeURIComponent(lines.join('\n'));
    return `https://wa.me/${phone}?text=${text}`;
  }

  openWhatsApp(): void {
    window.open(this.whatsappUrl, '_blank');
  }
}
