import { NoteListService } from './note-list.service';
import { Note } from './../note';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-note-list',
  templateUrl: './note-list.component.html',
  styleUrls: ['./note-list.component.css']
})
export class NoteListComponent implements OnInit {
  public visible : boolean
  public notes : Array<Note>
  public edit : Note
  constructor(private _NoteListService : NoteListService) { }
  
  ngOnInit() {
    this.visible=this._NoteListService.visible;
    this.notes=this._NoteListService.notes
    this.edit=this._NoteListService.edit
  }
  deleteNote(noteId: number){
    console.log(noteId)
    var index = this._NoteListService.indexNote(noteId)
    this._NoteListService.notes.splice(index,1)
  }
  editNote(noteId: number){
    console.log(noteId)
    var index = this._NoteListService.indexNote(noteId)
    this._NoteListService.edit = this._NoteListService.notes[index]
    this._NoteListService.visible = true
  }
}
