import { Component } from '@angular/core';
import { NOTES } from './notes';
import { NgFor } from '@angular/common';
import {RouterModule} from '@angular/router'
@Component({
  selector: 'app-notes',
  standalone: true,
  imports: [NgFor, RouterModule],
  template: `
     <ul>
      <li *ngFor="let note of notes">
        <button [routerLink]="['/note', note.id]">
        <h3>{{ note.title }}</h3> <!-- Display the title -->
        <p>{{ note.text }}</p> <!-- Display the note content -->
        </button>
      </li>
    </ul>

    <button class="add-note-button" [routerLink]="['/new']">Add New Note</button>
  `,
  styleUrl: './notes.component.css'
})
export class NotesComponent {
  notes = NOTES;
}
