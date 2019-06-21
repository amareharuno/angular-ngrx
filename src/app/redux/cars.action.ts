import {Action} from '@ngrx/store';
import {Car} from '../car.model';

export namespace CAR_ACTON {
  export const ADD_CAR = 'ADD_CAR';
  export const DELETE_CAR = 'DELETE_CAR';
  export const UPDATE_CAR = 'UPDATE_CAR';
  export const LOAD_CARS = 'LOAD_CARS';
}

export type CarsAction = AddCar | DeleteCar | UpdateCar | LoadCars;

export class AddCar implements Action {
  readonly type = CAR_ACTON.ADD_CAR;

  constructor(public payload: Car) {
  }
}

export class DeleteCar implements Action {
  readonly type = CAR_ACTON.DELETE_CAR;

  constructor(public payload: Car) {
  }
}

export class UpdateCar implements Action {
  readonly type = CAR_ACTON.UPDATE_CAR;

  constructor(public payload: Car) {
  }
}

export class LoadCars implements Action {
  readonly type = CAR_ACTON.LOAD_CARS;

  constructor(public payload: Car[]) {
  }
}
