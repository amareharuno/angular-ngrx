import {Action} from '@ngrx/store';
import {Car} from '../car.model';

export namespace CAR_ACTON {
  export const ADD_CAR = 'ADD_CAR';
}

export class AddCar implements Action {
  readonly type = CAR_ACTON.ADD_CAR;


  constructor(public payload: Car) {
    // this.payload = payload;
  }
}
