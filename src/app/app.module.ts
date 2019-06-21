import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {NgModule} from '@angular/core';
import {EffectsModule} from '@ngrx/effects';
import {StoreModule} from '@ngrx/store';

import {AppComponent} from './app.component';
import {CarComponent} from './car/car.component';
import {CarsFormComponent} from './cars-form/cars-form.component';
import {CarsEffect} from './redux/cars.effect';
import {carsReducer} from './redux/cars.reducer';
import {CarsService} from './cars.service';

@NgModule({
  declarations: [
    AppComponent,
    CarsFormComponent,
    CarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    EffectsModule.forRoot([CarsEffect]),
    StoreModule.forRoot({carPage: carsReducer})
  ],
  providers: [
    CarsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
