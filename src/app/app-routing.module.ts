import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormularioComponent } from './formulario/formulario.component';
import { LandingPageRealComponent } from './landing-page-real/landing-page-real.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { PaginaExitoComponent } from './pagina-exito/pagina-exito.component';

const routes: Routes = [
  { path: 'prueba', component: LandingPageComponent },
  { path: 'landing-page', component: LandingPageRealComponent },
  { path: 'formulario', component: FormularioComponent },
  { path: 'enviado', component: PaginaExitoComponent },
  { path: '', pathMatch: 'full', redirectTo: 'landing-page' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
