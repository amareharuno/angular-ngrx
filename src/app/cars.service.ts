import {Store} from '@ngrx/store';
import {AppState} from './redux/app.state';
import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Car} from './car.model';
import {LoadCars} from './redux/cars.action';

@Injectable()
export class CarsService {

  static BASE_URL = 'http://localhost:3002/';

  constructor(private http: HttpClient, private store: Store<AppState>) {
  }

  loadCars(): void {
    this.http.get(CarsService.BASE_URL + 'cars').subscribe((cars: Car[]) => {
      this.store.dispatch(new LoadCars(cars));
    });
  }
}
