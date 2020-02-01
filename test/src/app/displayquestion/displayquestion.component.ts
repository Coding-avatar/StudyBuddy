import { Component, OnInit} from '@angular/core';
import { allquestions } from '../questions';
// import { Output } from '@angular/core';
// import { EventEmitter} from '@angular/core';


@Component({
  selector: 'app-displayquestion',
  templateUrl: './displayquestion.component.html',
  styleUrls: ['./displayquestion.component.css']
})
export class DisplayquestionComponent implements OnInit {
  allquestions = allquestions
  // share(){
  //   window.alert('shared');
  // }

  ngOnInit() {
  }

}
