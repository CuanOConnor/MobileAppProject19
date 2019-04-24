import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AddNotePage } from '../add-note/add-note';
import { NoteProvider } from '../../providers/note/note';
import { Note } from '../../models/note.model';
import { ViewNotePage } from '../view-note/view-note';

@IonicPage()
@Component({
  selector: 'page-planner',
  templateUrl: 'planner.html',
})
export class PlannerPage {

  private notes: Promise<Note[]>;
  private note: Note;

  constructor(public navCtrl: NavController, private noteProvider: NoteProvider)
  {
     
  }

  addNote()
  {
    this.navCtrl.push(AddNotePage);
  }

  // calls array from provider
  getAllNotes()
  {
    return this.noteProvider.getAllNotes();
  }
 
  ionViewWillEnter()
  {
    this.notes = this.getAllNotes();
  }

  // gets promise of note and pushes the ViewNotePage with a note
  getNote(createDate: number)
  {
    this.noteProvider.getNote(createDate).then(n=>{
      this.note = n;
      this.navCtrl.push(ViewNotePage, {note: this.note});
    });
  }

}
