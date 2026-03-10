import { Component, Inject, inject, OnInit } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MAT_DIALOG_DATA, MatDialogModule} from '@angular/material/dialog';
import {MatSelectModule} from '@angular/material/select';
import {FormControl, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import { tap } from 'rxjs';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-form-dialog',
  imports: [MatButtonModule, MatDialogModule, MatFormFieldModule, MatSelectModule, FormsModule, ReactiveFormsModule, AsyncPipe],
  templateUrl: './form-dialog.html',
  styleUrl: './form-dialog.css',
})
export class FormDialog implements OnInit {

  data$: any;
  
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {
    // this.data$ = data;
  }

  toppings = new FormControl('');
  // data = inject(MAT_DIALOG_DATA);


  ngOnInit(): void {
    console.log(this.data);
    console.log("simple console");
  }

}
