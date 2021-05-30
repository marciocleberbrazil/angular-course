import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ClockService } from '../clock.service';
import { DataService } from '../data.service';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {

  @Input() message: string | undefined;

  message2: string = "OLá mundão";

  @Output() messageEvent = new EventEmitter<string>();

  constructor(private data: DataService, public cs: ClockService) { }

  ngOnInit(): void {
    this.data.currentMessage.subscribe(message => this.message = message);
  }

  sendMessage() {
    this.messageEvent.emit(this.message2);
  }
}
