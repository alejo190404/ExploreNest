import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing-page-real',
  templateUrl: './landing-page-real.component.html',
  styleUrls: ['./landing-page-real.component.css']
})
export class LandingPageRealComponent {
  showButtons = true;

  constructor(
    private router: Router,
  ){}

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const yOffset = window.pageYOffset;
    this.showButtons = yOffset > 100; 

  }
  @ViewChild('scrollTarget')
  scrollTarget!: ElementRef;


  scrollToBottom(): void {
    window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
  }
  
  navigateTo(address: string) {
    this.router.navigate([address]);
  }


}
