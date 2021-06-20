import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { IonicModule } from '@ionic/angular';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@NgModule({
  exports: [
    IonicModule,
    HttpClientModule,
    CommonModule,
    ReactiveFormsModule
  ],
})
export class SharedModule { }
