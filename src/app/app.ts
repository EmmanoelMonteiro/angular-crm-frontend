import { Component } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common'; // Importe CommonModule para usar *ngIf, *ngFor etc

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule, // Módulo para diretivas estruturais
    RouterOutlet, // Necessário para que o <router-outlet> funcione
    RouterLink,   // Necessário para o routerLink nos botões
    RouterLinkActive // Necessário para a classe 'active'
  ],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  title = 'angular-crm-frontend';
}