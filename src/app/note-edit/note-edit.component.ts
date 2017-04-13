import { Component, OnInit } from '@angular/core';
import { NoteListService } from './../note-list/note-list.service';
import { Note } from './../note'

@Component({
  selector: 'app-note-edit',
  templateUrl: './note-edit.component.html',
  styleUrls: ['./note-edit.component.css']
})
export class NoteEditComponent implements OnInit {
  public notes : Array<Note>
  public visible : boolean
  public edit : Note
  public newNote: Note
  public default : string;
  constructor(private _NoteListService : NoteListService) { 
    this.visible = this._NoteListService.visible
    this.edit = this._NoteListService.edit
    this.newNote = this.edit
  }

  ngOnInit() {
    // var self = this
    // document.addEventListener("click", function(e) {return self.updateSection()}, false);
    this.edit = this._NoteListService.edit
    this.visible = this._NoteListService.visible
    this.default = this.edit.noteBody
    this.newNote = new Note
    this.newNote.noteBody = this.default
  }
  submitChange(){
    this.newNote.modified_at = new Date
    this.newNote.id = this.edit.id
    this._NoteListService.notes[ this._NoteListService.indexNote(this.edit.id) ] = this.newNote
    this.edit = new Note
    this._NoteListService.visible = false
  }
  // updateSection(){
  //   this.edit = this._NoteListService.edit
  //   this.visible = this._NoteListService.visible
  //   this.default = this.edit.noteBody
  // }
  cancel(){
    this._NoteListService.edit = new Note
    this.newNote = new Note
    this._NoteListService.visible = false
  }
}
