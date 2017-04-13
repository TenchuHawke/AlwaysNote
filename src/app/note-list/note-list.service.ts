import { Note } from './../note';
import { Injectable } from '@angular/core';

@Injectable()
export class NoteListService {

  public notes: Array<Note>
  public visible: boolean
  public edit : Note
  constructor() {
    this.notes = []
    this.visible = false
    this.edit = new Note
   }
  public indexNote(note : number){
    for (var index = 0; index < this.notes.length; index++) {
      if (this.notes[index].id === note)
        return index     
    }
    return null
  }
}
