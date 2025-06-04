import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  currentYear: number = new Date().getFullYear();

  constructor() { }

  ngOnInit() {
    // Any initialization logic can go here
  }

  goToHome() {
    // Logic to navigate to the home page
    window.location.href = '/';
  }
}
