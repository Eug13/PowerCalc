import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import { CarsComponent } from './cars/cars.component';
import { ViewCarComponent } from './view-car/view-car.component';
import { InputCarComponent } from './input-car/input-car.component';
import { TrainingService } from './cars/training.servise';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule
  ],
  declarations: [
    AppComponent,
    CarsComponent,
    ViewCarComponent,
    InputCarComponent
  ],
  providers: [TrainingService],
  bootstrap: [AppComponent,CarsComponent]
})
export class AppModule { }
