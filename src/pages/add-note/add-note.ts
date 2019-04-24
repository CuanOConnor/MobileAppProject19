import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NoteProvider } from '../../providers/note/note';
import { Note } from '../../models/note.model';
import { FormGroup, Validators, FormControl } from '@angular/forms';

@IonicPage()
@Component({
  selector: 'page-add-note',
  templateUrl: 'add-note.html',
})
export class AddNotePage
{
  // variables to handle the form data
  formGroup: FormGroup;
  note: Note;
  date: Date = new Date();
  title: string = '';
  content: string = '';

  constructor(public navCtrl: NavController, private noteProvider: NoteProvider)
  {
    this.formGroup = new FormGroup
    ({
      title: new FormControl(),
      content: new FormControl(),
      date: new FormControl()
    })
  }

  ionViewDidLoad()
  {
    console.log('ionViewDidLoad AddNotePage');
  }

  // calls in save note from provider and pops the view off the stack
  saveNote(note: Note)
  {
    this.noteProvider.saveNote(note);
    this.navCtrl.pop();
  }

}
