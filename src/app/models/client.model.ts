// src/app/models/client.model.ts

export interface Client {
  id?: number; // Opcional, pois não é enviado ao criar
  nome: string;
  cpf: string;
  email: string;
  idade: number;
  logradouro: string;
  numero: number;
  bairro: string;
  cidade: string;
  uf: string;
  createdDate?: string; // Opcional, gerado pelo backend
  lastModifiedDate?: string; // Opcional, gerado pelo backend
}