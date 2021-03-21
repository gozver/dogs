import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatToolbarModule } from '@angular/material/toolbar';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { Globals } from './globals/globals'

import { DogModule } from "./components/dog/dog.module";
import { HomeModule } from "./components/home/home.module";


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    MatToolbarModule,
    HomeModule,
    DogModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [
    Globals
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
