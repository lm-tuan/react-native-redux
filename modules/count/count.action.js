import * as types from './count.type';

export const inCrease = (number) => ({ type: types.INCREASE, number});
export const Reduction = (number) => ({ type: types.REDUCTION, number });
export const Rest = () => ({ type: types.RESTART });
