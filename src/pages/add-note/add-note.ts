import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NoteProvider } from '../../providers/note/note';

@IonicPage()
@Component({
  selector: 'page-add-note',
  templateUrl: 'add-note.html',
})
export class AddNotePage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private noteProvider: NoteProvider) {
  }

  ionViewDidLoad()
  {
    console.log('ionViewDidLoad AddNotePage');
  }

  saveNote(value: {title: string})
  {
    this.noteProvider.saveNote(value);
  }

}
