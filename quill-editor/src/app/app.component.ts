import { Component,OnInit } from '@angular/core';
import { FormGroup,FormControl } from '@angular/forms';
import {questions } from '../questions'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['../../node_modules/quill/dist/quill.core.css']
})
export class AppComponent implements OnInit{

  editorForm:FormGroup;
  editorContent:string;
  questions=questions
  editorStyle={
    height : '300px'
  }
  ngOnInit(){
    this.editorForm = new FormGroup({
      'editor': new FormControl(null)
    })

  }
  onSubmit(){
    this.editorContent = this.editorForm.get('editor').value;
    console.log(this.editorForm.get('editor').value);
    this.questions.push(this.editorForm.get('editor').value)
    console.log(this.questions)
  }
}

