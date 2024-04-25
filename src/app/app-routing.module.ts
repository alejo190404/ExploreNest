import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageRealComponent } from './landing-page-real/landing-page-real.component';
import { LandingPageComponent } from './landing-page/landing-page.component';

const routes: Routes = [
  { path: 'prueba', component: LandingPageComponent },
  { path: 'landing-page', component: LandingPageRealComponent },
  { path: '', pathMatch: 'full', redirectTo: 'landing-page' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
