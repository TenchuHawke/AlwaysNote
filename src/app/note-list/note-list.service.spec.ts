import { TestBed, inject } from '@angular/core/testing';

import { NoteListService } from './note-list.service';

describe('NoteListService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NoteListService]
    });
  });

  it('should ...', inject([NoteListService], (service: NoteListService) => {
    expect(service).toBeTruthy();
  }));
});
