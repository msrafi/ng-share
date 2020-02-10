import { Component, OnInit } from '@angular/core';
import { DataService } from "../data.service";

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit {

  parentMessage:string = "Hello from Parent";
  message1:string = " Its still in parent";
  message2: string;

  constructor(private data: DataService) { }

  ngOnInit() {
    this.data.currentMessage.subscribe(message => this.message2 = message)
  }

  receiveMessage($event){
    this.message1 = $event;
  }

  somehere(){
    this.data.changeMessage("Changed in Home component");
  }

}
