import { ViewportScroller } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import emailjs from '@emailjs/browser';

@Component({
  selector: 'app-cuestionario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {
  responses: any = {
    nightLife: true,
    historical: false,
    nature:false,
    beach:false,

    camping:true,
    eco:false,
    hoteles:false,

    alquiler:true,
    publico:false,
    privado:false,

    museos:true,
    urban:false,
    deportes:false,
    natureeco:false,

  };
  
  email: string = '';

  constructor(
    private viewportScroller: ViewportScroller,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.viewportScroller.scrollToPosition([0, 0]);
  }
  async onSubmit(correo: string){
    emailjs.init("Ci0wROnYKNEOpCFoW");
    if (this.responses.nightLife == true && this.responses.camping && this.responses.alquiler && this.responses.museos){
      console.log("Template 1");
      console.log(correo);
      console.log(this.responses);
      
      
      
      const response = await emailjs.send("service_5j3tmmd","template_8343y6o",{
        email: correo,
        });
        this.router.navigate(['enviado']);
    }
    else {
      console.log("Template 2");
      console.log(correo);
      console.log(this.responses);
      
      const response = await emailjs.send("service_5j3tmmd","template_39dw75k",{
        email: correo,
        });
        this.router.navigate(['enviado']);
    }
    this.router.navigate(['enviado']);
  }
}