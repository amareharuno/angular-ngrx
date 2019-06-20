import {Car} from '../car.model';
import {CAR_ACTON, CarsAction} from './cars.action';

const initialState = {
  cars: [
    new Car('Ford', '12.12.12', 'Focus', false, 1),
    new Car('Audi', '08.08.12', 'A4', false, 2)
  ]
};

export function carsReducer(state = initialState, action: CarsAction) {
  switch (action.type) {
    case CAR_ACTON.ADD_CAR:
      return {...state, cars: [...state.cars, action.payload]};
    case CAR_ACTON.DELETE_CAR:
      return {...state, cars: [...state.cars.filter(car => car.id !== action.payload.id)]};
    default:
      return state;
  }
}
