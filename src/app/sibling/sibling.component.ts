import { Component, OnInit } from '@angular/core';
import { ClockService } from '../clock.service';
import { DataService } from '../data.service';

@Component({
  selector: 'app-sibling',
  templateUrl: './sibling.component.html',
  styleUrls: ['./sibling.component.scss']
})
export class SiblingComponent implements OnInit {

  message = "";

  constructor(private data: DataService, public cs: ClockService) {}

  newMessageHandler() {
    this.data.changeMessage("Hello from Sibing");
  }

  ngOnInit(): void {
    this.data.currentMessage.subscribe(message => this.message = message);
  }

}
