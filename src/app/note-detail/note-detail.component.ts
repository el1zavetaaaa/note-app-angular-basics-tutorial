import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { inject } from '@angular/core';
import { decrementCount, NOTES } from '../notes/notes';
import { Router } from '@angular/router';
@Component({
  selector: 'app-note-detail',
  standalone: true,
  imports: [],
  templateUrl: './note-detail.component.html',
  styleUrl: './note-detail.component.css'
})
export class NoteDetailComponent {
  note: any
  activeRoute = inject(ActivatedRoute);
  router = inject(Router);
  // id = Number(this.activeRoute.snapshot.paramMap.get('id'));
  // note = NOTES.find((note) => note.id === this.id);

  ngOnInit() {
    this.activeRoute.paramMap.subscribe(params => {
      const id = Number(params.get('id'));
      this.note = NOTES.find(note => note.id === id);
    });
  }

  deleteNote(note_id: number) {
      // Find the index of the note with the specified ID
    const index = NOTES.findIndex(note => note.id === note_id);
    
    // If the note exists, remove it from the array
    if (index !== -1) {
        NOTES.splice(index, 1); // Remove the note at the found index
        decrementCount(); // Decrement the note count
    }

    // Redirect to the main page
    this.router.navigateByUrl('/');
  }
}
