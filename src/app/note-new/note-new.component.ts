import { NoteListService } from './../note-list/note-list.service';
import { Note } from './../note';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-note-new',
  templateUrl: './note-new.component.html',
  styleUrls: ['./note-new.component.css']
})
export class NoteNewComponent implements OnInit {
  public newNote : Note
  public notes : Array<Note>
  constructor(private _NoteListService: NoteListService) {
    this.newNote = new Note;
    this.notes = this._NoteListService.notes
   }

  insert(formData) {
    {
      console.log(this._NoteListService.notes)
      this.newNote.id = this._NoteListService.notes.length ? this._NoteListService.notes[this._NoteListService.notes.length-1].id+1 : 0 
      console.log(this.newNote)
      this.newNote.created_at = new Date;
      this.newNote.modified_at = new Date;
      this._NoteListService.notes.push(this.newNote)
      this.newNote = new Note
    }
  }
  ngOnInit() {
    this.newNote = new Note;
    this.notes = this._NoteListService.notes;
  }
}
