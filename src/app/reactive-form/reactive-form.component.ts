import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { incrementAndGetCount, NOTES } from '../notes/notes';
import { Router } from '@angular/router';
import { inject } from '@angular/core';
@Component({
  selector: 'app-reactive-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './reactive-form.component.html',
  styleUrl: './reactive-form.component.css'
})
export class ReactiveFormComponent {
  addNoteForm = new FormGroup({
    title: new FormControl('', Validators.required),
    description: new FormControl('')
  });
 
  router = inject(Router);
  addNote() {
    let title = this.addNoteForm.value.title ?? '';
    let description = this.addNoteForm.value.description ?? '';
    NOTES.push({ id: incrementAndGetCount(), title: title, text: description });
    this.router.navigateByUrl('/');
  }
}
