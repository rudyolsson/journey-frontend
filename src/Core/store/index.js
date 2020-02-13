import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { alertReducer } from 'Core/store/reducers/alert.reducer';
import { authReducer } from 'Core/store/reducers/auth.reducer';

export default combineReducers({
  form: formReducer,
  alert: alertReducer,
  auth: authReducer
});
