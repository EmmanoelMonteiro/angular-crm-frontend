// src/app/components/client-list/client-list.component.ts

import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ClientService } from '../../services/client.service';
import { Client } from '../../models/client.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-client-list',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.css']
})
export class ClientListComponent implements OnInit {
  clients: Client[] = [];

  constructor(private clientService: ClientService, private router: Router) { }

  ngOnInit(): void {
    this.loadClients();
  }

  loadClients(): void {
    this.clientService.getAllClients().subscribe(
      (data) => {
        this.clients = data;
      },
      (error) => {
        console.error('Erro ao carregar clientes:', error);
      }
    );
  }

  editClient(id: number | undefined): void {
    if (id) {
      this.router.navigate(['/client-form', id]);
    }
  }

  deleteClient(id: number | undefined): void {
    if (id && confirm('Tem certeza que deseja excluir este cliente?')) {
      this.clientService.deleteClient(id).subscribe(
        () => {
          this.loadClients(); // Recarrega a lista após a exclusão
        },
        (error) => {
          console.error('Erro ao excluir cliente:', error);
        }
      );
    }
  }
}