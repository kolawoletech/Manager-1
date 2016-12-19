import {
  EMPLOYEE_UPDATE,
  EMPLOYEE_CREATE,
  EMPLOYEE_SAVE_SUCCESS,
  CLEAR_FORM
} from '../actions/types';

const INITIAL_STATE = {
  name: '',
  phone: '',
  shift: 'Monday'
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case EMPLOYEE_UPDATE:
      return { ...state, [action.payload.prop]: action.payload.value };
    case EMPLOYEE_CREATE:
      return INITIAL_STATE;   
    case EMPLOYEE_SAVE_SUCCESS:
      return INITIAL_STATE;   
    case CLEAR_FORM:
      return INITIAL_STATE;
    default:
      return state;
  }
};
