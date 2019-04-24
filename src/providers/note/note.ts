import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Note } from '../../models/note.model';

@Injectable()
export class NoteProvider {

  private notes: Note[] = [];
  private note: Note;

  constructor(public http: HttpClient, private storage:Storage)
  {
    console.log('Hello NoteProvider Provider');
  }

  // pushing a note onto array of notes and saving to storage
  saveNote(note: Note)
  {
    // date is used here as a unique identifier for the notes
    note.createDate = Date.now();
    this.notes.push(note);
    this.storage.set('notes', this.notes);
  }//saveNote

  // returns a copy of notes and not a direct pointer from storage
  getAllNotes()
  {
    return this.storage.get('notes').then((notes)=>{
      // checks for any empty array first
      this.notes = notes == null ? [] : notes;
      //returns copy or array
      return [...this.notes];
    })
  }

  // uses unique identifier date to return the notes array EXCEPT for the note chosen to delete
  deleteNote(createDate: number)
  {
    this.notes = this.notes.filter((note)=>{
      return note.createDate !== createDate
    });
    this.storage.set('notes', this.notes);
  }

  // gets a note from the array as a promise then selects a copy of notes and returns a note using unique identifier date
  getNote(createDate: number)
  {
    return this.storage.get('notes').then((notes)=>{
      this.note = [...notes].find(r=>r.createDate === createDate);
      return this.note;
    });
  }
}//NoteProvider
