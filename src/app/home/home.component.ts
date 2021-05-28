import { AfterViewInit, Component, DoCheck, OnDestroy, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy, AfterViewInit, DoCheck {

  boats: Observable<{ name: string; year: number; img: string; }[]> | undefined;
  constructor(){}

  ngDoCheck(): void {
    // check detection
    console.log('Checked');
  }

  ngAfterViewInit(): void {
    // child views loaded
  }

  ngOnDestroy(): void {
    // teardown
  }

  ngOnInit(): void {
    this.boats = of ([
      {
        name: 'Starfire',
        year: 1980,
        img: 'assets/boat.jpg'
      },
      {
        name: 'Oracle',
        year: 1982,
        img: 'assets/boat2.jpg'
      }
    ]);
  }

  changeTitle() {
    document.querySelector('#title')!.innerHTML = 'I am here 1 2 3';
  }
}
