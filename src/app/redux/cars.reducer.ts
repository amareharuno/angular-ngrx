import {CAR_ACTON, CarsAction} from './cars.action';

const initialState = {
  cars: []
};

export function carsReducer(state = initialState, action: CarsAction) {
  switch (action.type) {
    case CAR_ACTON.ADD_CAR:
      return {...state, cars: [...state.cars, action.payload]};
    case CAR_ACTON.DELETE_CAR:
      return {...state, cars: [...state.cars.filter(car => car.id !== action.payload.id)]};
    case CAR_ACTON.UPDATE_CAR:
      const index = state.cars.findIndex(car => car.id === action.payload.id);
      state.cars[index].isSold = true;
      return {...state, cars: [...state.cars]};
    case CAR_ACTON.LOAD_CARS:
      return {...state, cars: [...action.payload]};
    default:
      return state;
  }
}
