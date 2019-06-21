import {Component, OnInit} from '@angular/core';
import * as moment from 'moment';
import {Car} from '../car.model';
import {CarsService} from '../cars.service';

@Component({
  selector: 'app-cars-form',
  templateUrl: './cars-form.component.html',
  styleUrls: ['./cars-form.component.css']
})
export class CarsFormComponent implements OnInit {

  carName = '';
  carModel = '';

  constructor(private carsService: CarsService) {
  }

  ngOnInit() {
  }

  onAdd() {
    if (this.carName === '' || this.carModel === '') {
      return;
    }

    const date = moment().format('DD.MM.YY');
    const car = new Car(this.carName, date, this.carModel);
    this.carsService.addCar(car);

    this.carName = '';
    this.carModel = '';
  }

  onLoad() {
    this.carsService.loadCars();
  }
}
