// src/app/components/client-form/client-form.component.ts

import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { ClientService } from '../../services/client.service';
import { Client } from '../../models/client.model';

@Component({
  selector: 'app-client-form',
  standalone: true, // Adicione esta linha
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterLink // Adicione
  ],
  templateUrl: './client-form.component.html',
  styleUrls: ['./client-form.component.css']
})
export class ClientFormComponent implements OnInit {
  clientForm: FormGroup;
  isEditMode: boolean = false;
  id: number | null = null;
  ufOptions: string[] = ['AC', 'AL', 'AP', 'AM', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MT', 'MS', 'MG', 'PA', 'PB', 'PR', 'PE', 'PI', 'RJ', 'RN', 'RS', 'RO', 'RR', 'SC', 'SP', 'SE', 'TO'];

  constructor(
    private fb: FormBuilder,
    private clientService: ClientService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.clientForm = this.fb.group({
      id: [0],
      nome: ['', Validators.required],
      cpf: ['', [Validators.required, Validators.pattern(/^\d{11}$/)]], // CPF com 11 dígitos
      email: [''],
      idade: ['', [Validators.required, Validators.min(0)]],
      logradouro: [''],
      numero: [0],
      bairro: [''],
      cidade: [''],
      uf: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      if (id) {
        this.id = +id;
        this.isEditMode = true;
        this.clientService.getClientById(this.id).subscribe(
          (client) => {
            this.clientForm.patchValue(client);
          },
          (error) => {
            console.error('Erro ao carregar cliente para edição:', error);
          }
        );
      }
    });
  }

  onSubmit(): void {
    if (this.clientForm.valid) {
      const client: Client = this.clientForm.value;
      if (this.isEditMode && this.id) {
        this.clientService.updateClient(this.id, client).subscribe(
          () => {
            console.log('Cliente atualizado com sucesso!');
            this.router.navigate(['/clients']);
          },
          (error) => {
            console.error('Erro ao atualizar cliente:', error);
          }
        );
      } else {
        this.clientService.createClient(client).subscribe(
          () => {
            console.log('Cliente criado com sucesso!');
            this.router.navigate(['/clients']);
          },
          (error) => {
            console.error('Erro ao criar cliente:', error);
          }
        );
      }
    } else {
      console.log('Formulário inválido!');
      // Marcar campos como touched para exibir mensagens de erro
      this.clientForm.markAllAsTouched();
    }
  }

  // Helper para verificar se um campo é inválido e foi tocado
  isInvalid(controlName: string): boolean {
    const control = this.clientForm.get(controlName);
    return control ? control.invalid && (control.dirty || control.touched) : false;
  }
}