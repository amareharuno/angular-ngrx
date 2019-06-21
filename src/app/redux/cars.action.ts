import {Action} from '@ngrx/store';
import {Car} from '../car.model';

export namespace CAR_ACTON {
  export const ADD_CAR = 'ADD_CAR';
  export const DELETE_CAR = 'DELETE_CAR';
  export const UPDATE_CAR = 'UPDATE_CAR';
}

export type CarsAction = AddCar | DeleteCar | UpdateCar;

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