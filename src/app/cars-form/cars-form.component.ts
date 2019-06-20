import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import * as moment from 'moment';
import {Car} from '../car.model';
import {AppState} from '../redux/app.state';
import {AddCar} from '../redux/cars.action';

@Component({
  selector: 'app-cars-form',
  templateUrl: './cars-form.component.html',
  styleUrls: ['./cars-form.component.css']
})
export class CarsFormComponent implements OnInit {

  private id = 2;

  carName = '';
  carModel = '';

  constructor(private store: Store<AppState>) {
  }

  ngOnInit() {
  }

  onAdd() {
    if (this.carName === '' || this.carModel === '') {
      return;
    }

    this.id = ++this.id;

    const car = new Car(
      this.carName,
      moment().format('DD.MM.YY'),
      this.carModel,
      false,
      this.id
    );

    this.store.dispatch(new AddCar(car));

    this.carName = '';
    this.carModel = '';
  }

  onLoad() {
    // todo
  }
}
