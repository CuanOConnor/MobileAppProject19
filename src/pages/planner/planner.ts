import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AddNotePage } from '../add-note/add-note';
import { NoteProvider } from '../../providers/note/note';

@IonicPage()
@Component({
  selector: 'page-planner',
  templateUrl: 'planner.html',
})
export class PlannerPage {

  notes: {title: string}[] = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, private noteProvider: NoteProvider)
  {
     
  }

  addNote()
  {
    this.navCtrl.push(AddNotePage);
  }

  getAllNotes()
  {
    return this.noteProvider.getAllNotes();
  }
 
  ionViewWillEnter()
  {
    this.notes = this.getAllNotes();
  }

}
