import { Routes } from '@angular/router';
import { NotesComponent } from './notes/notes.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { NoteDetailComponent } from './note-detail/note-detail.component';

export const routes: Routes = [
    { path: '', component: NotesComponent },
    { path: 'new', component: ReactiveFormComponent }, 
    { path: 'note/:id', component: NoteDetailComponent }
];
