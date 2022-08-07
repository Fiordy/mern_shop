import { UserConstants } from "../constants/userConstants";

export const userLoginReducer = (state = {}, action) => {
  switch (action.type) {
    case UserConstants.Login.REQUEST:
      return { loading: true };
    case UserConstants.Login.SUCCESS:
      return { loading: false, userInfo: action.payload };
    case UserConstants.Login.FAIL:
      return { loading: false, error: action.payload };
    case UserConstants.Login.LOGOUT:
      return {};
    default:
      return state;
  }
};

export const userRegisterReducer = (state = {}, action) => {
  switch (action.type) {
    case UserConstants.Register.REQUEST:
      return { loading: true };
    case UserConstants.Register.SUCCESS:
      return { loading: false, userInfo: action.payload };
    case UserConstants.Register.FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const userDetailsReducer = (state = { user: {} }, action) => {
  switch (action.type) {
    case UserConstants.Details.REQUEST:
      return { ...state, loading: true };
    case UserConstants.Details.SUCCESS:
      return { loading: false, user: action.payload };
    case UserConstants.Details.FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const userUpdateReducer = (state = {}, action) => {
  switch (action.type) {
    case UserConstants.Update.REQUEST:
      return { ...state, loading: true };
    case UserConstants.Update.SUCCESS:
      return { loading: false, success: true, userInfo: action.payload };
    case UserConstants.Update.FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
