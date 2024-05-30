import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { LandingPageRealComponent } from './landing-page-real/landing-page-real.component';
import { FormularioComponent } from './formulario/formulario.component';
import { PaginaExitoComponent } from './pagina-exito/pagina-exito.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    LandingPageRealComponent,
    FormularioComponent,
    PaginaExitoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
