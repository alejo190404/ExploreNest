import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { LandingPageRealComponent } from './landing-page-real/landing-page-real.component';

const routes: Routes = [
  { path: 'landing-page', component: LandingPageComponent },
  { path: 'landing-page-real', component: LandingPageRealComponent },
  { path: '', pathMatch: 'full', redirectTo: 'landing-page-real' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
