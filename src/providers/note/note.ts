import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

@Injectable()
export class NoteProvider {

  private notes: {title: string}[] = [];

  constructor(public http: HttpClient, private storage:Storage)
  {
    console.log('Hello NoteProvider Provider');
  }

  saveNote(note: {title: string})
  {
    this.notes.push(note);
  }//saveNote

  getAllNotes()
  {
    return [...this.notes];
  }
}//NoteProvider
