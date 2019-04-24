import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NoteProvider } from '../../providers/note/note';
import { Note } from '../../models/note.model';

@IonicPage()
@Component({
  selector: 'page-view-note',
  templateUrl: 'view-note.html',
})
export class ViewNotePage {

  note: Note;

  constructor(public navCtrl: NavController, public navParams: NavParams, private noteProvider: NoteProvider) 
  {
    // passes a note to the view
    this.note = this.navParams.get('note');
  }

  ionViewDidLoad()
  {
    console.log('ionViewDidLoad ViewNotePage');
  }

  // uses createDate as a number to find the note then delete
  deleteNote(createDate: number)
  {
    this.noteProvider.deleteNote(createDate);
    this.navCtrl.pop();
  }

}
