import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { DataService } from "../data.service";

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {

  @Input() message: string; 

  message1: string = "This is from Child";
  message2: string;
  @Output() messageEvent: EventEmitter<string> = new EventEmitter(); 

  constructor(private data: DataService) { }

  sendMessage(){
    this.messageEvent.emit(this.message1);
  }

  ngOnInit() {
    this.data.currentMessage.subscribe(message => this.message2 = message)
  }

}
