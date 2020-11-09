import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { QuizcompComponent } from './quizcomp/quizcomp.component';
import { QuizcompService } from './services/quizcomp.service';

import {HttpClientModule} from '@angular/common/http';
import { fromEventPattern } from 'rxjs';

import { Routes, RouterModule } from "@angular/router";



@NgModule({
  declarations: [
    AppComponent,
    QuizcompComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [QuizcompService],
  bootstrap: [AppComponent]
})
export class AppModule { }
