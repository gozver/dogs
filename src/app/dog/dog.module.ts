import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

import { MatOptionModule } from "@angular/material/core";
import { MatSelectModule } from "@angular/material/select";
import { MatButtonModule } from "@angular/material/button";

import { TranslateModule } from "@ngx-translate/core";

import { DogRoutingModule } from './dog-routing.module';
import { DogComponent } from './component/dog.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatOptionModule,
    MatSelectModule,
    MatButtonModule,
    TranslateModule,
    DogRoutingModule
  ],
  declarations: [DogComponent]
})
export class DogModule { }
