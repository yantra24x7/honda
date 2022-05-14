
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

import { MatDialogModule } from '@angular/material/dialog';
import {MatIconModule} from  '@angular/material/icon'
@NgModule({
  declarations: [],
imports: [FormsModule,ReactiveFormsModule, //MatButtonModule, MatMenuModule,
    MatIconModule, 
 MatInputModule, 
 MatDialogModule,
 MatFormFieldModule,
  ],
  exports: [
MatIconModule,
 MatFormFieldModule,
MatInputModule,
MatDialogModule,
FormsModule,
ReactiveFormsModule

],
  providers: [
    //ExportService
  ]
})
export class SharedModule { }
