import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BoatComponent } from '../boat/boat.component';
import { MagnifierDirective } from '../magnifier.directive';
import { YearPipe } from '../year.pipe';
import { HomeComponent } from './home.component';
import { TestComponent } from './test/test.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  }
];

@NgModule({
  declarations: [
    HomeComponent, 
    BoatComponent,
    MagnifierDirective, 
    YearPipe, TestComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class HomeModule { }
