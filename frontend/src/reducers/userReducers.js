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
