import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './core/layout/navbar/navbar.component';

const routes: Routes = [
  {
    path: 'welcome',
    loadChildren: () => import('./features/welcome/welcome.module').then(m=> m.WelcomeModule)
  },
  {
    path: 'regista',
    loadChildren: () => import('./features/regista/regista.module').then(m=> m.RegistaModule)
  },
  {
    path: 'film',
    loadChildren: () => import('./features/film/film.module').then(m=> m.FilmModule)
  },
  { path: '', redirectTo: '/welcome', pathMatch: 'full' },
  { path: '**', redirectTo: '/welcome', pathMatch: 'full' },
  {
    path: 'navbar',
    loadChildren: () => import('./core/layout/layout.module').then(m=> m.LayoutModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
