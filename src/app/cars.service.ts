import {Store} from '@ngrx/store';
import {AppState} from './redux/app.state';
import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Car} from './car.model';
import {AddCar, DeleteCar, LoadCars, UpdateCar} from './redux/cars.action';

@Injectable()
export class CarsService {

  static BASE_URL = 'http://localhost:3002/';

  constructor(private http: HttpClient, private store: Store<AppState>) {
  }

  loadCars(): void {
    this.http.get(`${CarsService.BASE_URL}cars`).subscribe((cars: Car[]) => {
      this.store.dispatch(new LoadCars(cars));
    });
  }

  addCar(car: Car): void {
    this.http.post(`${CarsService.BASE_URL}cars`, car).subscribe((addedCar: Car) => {
      this.store.dispatch(new AddCar(addedCar));
    });
  }

  deleteCar(car: Car): void {
    this.http.delete(`${CarsService.BASE_URL}cars/${car.id}`).subscribe(_ => {
      this.store.dispatch(new DeleteCar(car));
    });
  }

  updateCar(car: Car): void {
    this.http.put(`${CarsService.BASE_URL}cars/${car.id}`, car).subscribe((updatedCar: Car) => {
      this.store.dispatch(new UpdateCar(updatedCar));
    });
  }
}
