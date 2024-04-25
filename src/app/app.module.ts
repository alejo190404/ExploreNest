import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { LandingPageRealComponent } from './landing-page-real/landing-page-real.component';
import { CuestionarioComponent } from './cuestionario/cuestionario.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    LandingPageRealComponent,
    CuestionarioComponent
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
