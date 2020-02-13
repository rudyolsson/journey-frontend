import * as AlertActionTypes from 'Core/store/types/alert.types';

export const initialState = {
  type: 'info',
  message: '',
  open: false
};

export const alertReducer = (state = initialState, action) => {
  switch (action.type) {
    case AlertActionTypes.SUCCESS:
      return {
        ...state,
        type: 'success',
        message: action.payload.message,
        open: true
      };
    case AlertActionTypes.ERROR:
      return {
        ...state,
        type: 'error',
        message: action.payload.message,
        open: true
      };
    case AlertActionTypes.CLEAR:
      return {
        ...state,
        message: '',
        open: false
      };
    default:
      return state;
  }
};
