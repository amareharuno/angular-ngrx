import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {NgModule} from '@angular/core';
import {StoreModule} from '@ngrx/store';

import {AppComponent} from './app.component';
import {CarComponent} from './car/car.component';
import {CarsFormComponent} from './cars-form/cars-form.component';
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
    StoreModule.forRoot({carPage: carsReducer}),
    HttpClientModule
  ],
  providers: [
    CarsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
