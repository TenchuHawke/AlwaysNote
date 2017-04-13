import { Component, OnInit } from '@angular/core';
import { NoteListService } from './../note-list/note-list.service';
import { Note } from './../note';


@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit {
  public visible : boolean
  public notes : Array<Note>
  constructor(private _NoteListService : NoteListService) { }


  ngOnInit() {
    this.visible=this._NoteListService.visible;
    this.notes=this._NoteListService.notes
        var self = this
    document.addEventListener("click", function(e) {return self.updateSection()}, false);
  }
  updateSection(){
    this.visible = this._NoteListService.visible
  }
}
