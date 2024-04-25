import { Component, ElementRef, HostListener, ViewChild  } from '@angular/core';

@Component({
  selector: 'app-landing-page-real',
  templateUrl: './landing-page-real.component.html',
  styleUrls: ['./landing-page-real.component.css']
})
export class LandingPageRealComponent {
  showButtons = false;

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
  


}
