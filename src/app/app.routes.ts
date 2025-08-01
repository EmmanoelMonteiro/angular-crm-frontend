// src/app/app-routing.ts

import { Routes } from '@angular/router';
import { ClientListComponent } from './components/client-list/client-list.component';
import { ClientFormComponent } from './components/client-form/client-form.component';

export const routes: Routes = [
  { path: '', redirectTo: '/clients', pathMatch: 'full' }, // Redireciona a raiz para a lista de clientes
  { path: 'clients', component: ClientListComponent },
  { path: 'client-form', component: ClientFormComponent },
  { path: 'client-form/:id', component: ClientFormComponent } // Rota para edição de cliente
];

//export class AppRoutingModule { }