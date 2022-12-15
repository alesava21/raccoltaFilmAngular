import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { RegistaListComponent } from './regista-list/regista-list.component';
import { RegistaService } from './regista.service';
import { RegistaCreateComponent } from './regista-create/regista-create.component';

const routes: Routes = [
  {
    path: 'list',
    component: RegistaListComponent
  },
  {
    path: 'create',
    component: RegistaCreateComponent
  },
  {
    path: 'edit/:id',
    component: RegistaCreateComponent
  },
  { path: '', redirectTo: 'list', pathMatch: 'full' }
]

@NgModule({
  declarations: [
    RegistaListComponent,
    RegistaCreateComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes),
  ],
  providers: [],
})
export class RegistaModule { }
