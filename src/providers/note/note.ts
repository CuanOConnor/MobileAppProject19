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

  saveNote(note: Note)
  {
    note.createDate = Date.now();
    this.notes.push(note);
    this.storage.set('notes', this.notes);
  }//saveNote

  getAllNotes()
  {
    return this.storage.get('notes').then((notes)=>{
      this.notes = notes == null ? [] : notes;
      return [...this.notes];
    })
  }

  deleteNote(createDate: number)
  {
    this.notes = this.notes.filter((note)=>{
      return note.createDate !== createDate
    });
    this.storage.set('notes', this.notes);
  }

  getNote(createDate: number)
  {
    return this.storage.get('notes').then((notes)=>{
      this.note = [...notes].find(r=>r.createDate === createDate);
      return this.note;
    });
  }
}//NoteProvider
