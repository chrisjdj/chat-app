import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatComponent } from './chat/chat.component';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [ChatComponent],
  imports: [
    CommonModule,
    MatInputModule, MatFormFieldModule, MatIconModule, FormsModule, ReactiveFormsModule,
  ],
  exports: [ChatComponent]
})
export class HomeModule { }
