import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { NgIf } from '@angular/common';
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NgFor, NgIf],
  template: `
    <h1>
      {{ title }}
        <!-- <div *ngFor="let item of products"> {{item}} </div>
         <div *ngIf="isRed"> red </div> -->
</h1> 
  `,
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  title = "My Notes !"
  products = ['apple', 'banana']
  isRed = true;

}
