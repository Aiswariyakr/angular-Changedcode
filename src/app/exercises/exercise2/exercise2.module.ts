import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Exercise2Component } from './exercise2.component';

import { FormsModule } from '@angular/forms';


import { RouterModule } from '@angular/router';
import { InvertedParentComponent } from './inverted-parent.component';
import { InvertedChildComponent } from './inverted-child.component';
import { ParentComponent } from './parent.component';
import { ChildComponent } from './child.component';



@NgModule({
  declarations: [
    Exercise2Component,
    
    InvertedParentComponent,
    InvertedChildComponent,
    ParentComponent,
    ChildComponent,
   
  ],
  imports: [
    FormsModule,
    CommonModule,
    RouterModule.forChild([{
      path: '',
      component: Exercise2Component
    }])
  ]
})
export class Exercise2Module { }
