import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { NotesComponent } from './notes/notes.component';
import { NoteNewComponent } from './note-new/note-new.component';
import { NoteListComponent } from './note-list/note-list.component';
import { NoteEditComponent } from './note-edit/note-edit.component';
import { NoteListService } from './note-list/note-list.service';

@NgModule({
  declarations: [
    AppComponent,
    NotesComponent,
    NoteNewComponent,
    NoteListComponent,
    NoteEditComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [NoteListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
