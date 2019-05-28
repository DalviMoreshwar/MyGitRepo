import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatCardModule, MatButtonModule, MatCheckboxModule, MatFormFieldModule, MatSelectModule, MatInputModule, MatToolbarModule, MatIconModule, MatGridListModule, MatDatepickerModule, MatNativeDateModule, MatDividerModule, MatSnackBarModule, MatTableModule } from '@angular/material';
import {  } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
  
  BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MatCardModule, MatButtonModule, MatCheckboxModule, MatFormFieldModule, MatSelectModule, MatInputModule, MatToolbarModule, MatIconModule, MatGridListModule, MatDatepickerModule, MatNativeDateModule, MatDividerModule, MatGridListModule, MatSnackBarModule, MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
