import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit {

  message:string = "Hello World";

  constructor(private data:DataService) { }
  ngOnInit(): void {
    this.data.currentMessage.subscribe(message => this.message = message);
  }

  receiveMessage($event: string) {
    this.message = $event;
  }

}
